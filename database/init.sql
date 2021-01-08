CREATE TYPE CAMPUS AS ENUM ('johanneberg', 'lindholmen');
CREATE TYPE WEEKDAY AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');

CREATE TABLE category (
    id UUID PRIMARY KEY,
    name_en VARCHAR(32) UNIQUE,
    name_sv VARCHAR(32) UNIQUE
);

CREATE TABLE restaurant (
    id UUID PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    category_id UUID REFERENCES category(id),
    menu VARCHAR(1024),
    hidden BOOL DEFAULT FALSE,
    campus_location CAMPUS NOT NULL,
    maps_link VARCHAR(1024),
    address VARCHAR(1024),
    phone_number VARCHAR(32)
);

CREATE TABLE opening_hours (
    restaurant_id UUID,
    weekday WEEKDAY,
    opens TIME NOT NULL, -- 0800
    closes TIME NOT NULL,    -- 2200
    PRIMARY KEY(restaurant_id, weekday),
    CONSTRAINT restaurant_opening_hours_fk
                           FOREIGN KEY (restaurant_id)
                           REFERENCES restaurant
                           ON DELETE CASCADE
);

CREATE FUNCTION AddOrUpdateOpeningHours(_restaurant_id UUID, _weekday WEEKDAY, _opens TIME, _closes TIME) RETURNS VOID AS $$
    BEGIN
        IF EXISTS (SELECT * FROM opening_hours WHERE opening_hours.restaurant_id = _restaurant_id AND opening_hours.weekday = _weekday) THEN
            UPDATE opening_hours SET opens = _opens, closes = _closes WHERE restaurant_id = _restaurant_id AND weekday = _weekday;
        ELSE
            INSERT INTO opening_hours(restaurant_id, weekday, opens, closes) VALUES (_restaurant_id, _weekday, _opens, _closes);
        END IF;
    END
$$ LANGUAGE plpgsql;

CREATE TABLE review (
    uid UUID NOT NULL,
    restaurant_id UUID,
    description VARCHAR(2048),
    rating SMALLINT NOT NULL CONSTRAINT rating_valid check (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY(uid, restaurant_id),
    CONSTRAINT restaurant_review_fk
                           FOREIGN KEY (restaurant_id)
                           REFERENCES restaurant
                           ON DELETE CASCADE
);

CREATE FUNCTION AddOrUpdateReview(_uid UUID, _restaurant_id UUID, _description VARCHAR(2048), _rating SMALLINT) RETURNS VOID AS $$
    BEGIN
        IF EXISTS (SELECT * FROM review WHERE uid = _uid AND restaurant_id = _restaurant_id) THEN
            UPDATE review SET rating = _rating, description = _description, updated_at = NOW() WHERE uid = _uid AND restaurant_id = _restaurant_id;
        ELSE
            INSERT INTO review(uid, restaurant_id, description, rating) VALUES (_uid, _restaurant_id, _description, _rating);
        END IF;
    END
$$ LANGUAGE plpgsql;

-- contains extra information about the menu
CREATE TABLE menu (
    restaurant_id UUID,
    description VARCHAR(2048),
    active BOOL DEFAULT FALSE,
    PRIMARY KEY (restaurant_id),
    CONSTRAINT restaurant_menu_fk
                       FOREIGN KEY (restaurant_id)
                       REFERENCES restaurant
                       ON DELETE CASCADE
);

-- e.g. Pizza 1, hamburgers, drinks
-- has optional extra information
CREATE TABLE menu_category (
    id UUID PRIMARY KEY,
    menu_restaurant_id UUID,
    name_sv VARCHAR(32) NOT NULL,
    name_en VARCHAR(32),
    description_sv VARCHAR(512),
    description_en VARCHAR(512),
    CONSTRAINT restaurant_menu_category_fk
                       FOREIGN KEY (menu_restaurant_id)
                       REFERENCES menu
                       ON DELETE CASCADE
);

-- todo: implement custom order
-- items from the menu
CREATE TABLE menu_item (
    id UUID PRIMARY KEY,
    category_id UUID NOT NULL,
    name_sv VARCHAR(64) NOT NULL ,
    name_en VARCHAR(64),
    description_sv VARCHAR(512),
    description_en VARCHAR(512),
    price VARCHAR(16),
    CONSTRAINT menu_category_menu_item_fk
                   FOREIGN KEY (category_id)
                   REFERENCES menu_category
                   ON DELETE CASCADE
);


CREATE TABLE menu_category_order (
    restaurant_id UUID,
    category_id UUID,
    position INT,
    PRIMARY KEY (restaurant_id, position)
);

CREATE FUNCTION AddCategoryToOrder() RETURNS TRIGGER AS $add_category_to_order_trigger$
DECLARE
    new_position INT := COALESCE((
        SELECT menu_category_order.position + 1
            FROM menu_category_order
            WHERE menu_category_order.restaurant_id = NEW.menu_restaurant_id
            ORDER BY menu_category_order.position
            LIMIT 1
        ), 0);
BEGIN
    RAISE NOTICE '%', new_position;
    INSERT INTO menu_category_order(restaurant_id, category_id, position) VALUES (NEW.menu_restaurant_id, NEW.id, new_position);
    RETURN NEW;
END
$add_category_to_order_trigger$ LANGUAGE plpgsql;


CREATE TRIGGER add_category_to_order_trigger
    AFTER INSERT ON menu_category
    FOR EACH ROW
    EXECUTE PROCEDURE AddCategoryToOrder();
--
-- CREATE TABLE menu_item_order
-- (
--     category_id UUID,
--     menu_id     UUID,
--     position INT,
--     PRIMARY KEY (category_id, menu_id, position)
-- );
--
-- CREATE FUNCTION AddItemToOrder() RETURNS TRIGGER AS $add_item_to_order_trigger$
--     BEGIN
--         INSERT INTO menu_item_order(category_id, menu_id) VALUES (NEW.category_id, NEW.id);
--         RETURN NEW;
--     END
-- $add_item_to_order_trigger$ LANGUAGE plpgsql;
--
-- CREATE TRIGGER add_item_to_order_trigger
--     AFTER INSERT ON menu_item
--     FOR EACH ROW
--     EXECUTE PROCEDURE AddItemToOrder();

-- e.g. tomato
--CREATE TABLE menu_ingredient ();

-- item to ingredient connection
--CREATE TABLE menu_item_ingredient ();

-- e.g. spicy, vegetarian
--CREATE TABLE menu_tags ();

-- links items to tags
--CREATE TABLE menu_item_tags ();
