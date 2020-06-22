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
    restaurant_id UUID REFERENCES restaurant(id),
    weekday WEEKDAY,
    opens TIME NOT NULL, -- 0800
    closes TIME NOT NULL,    -- 2200
    PRIMARY KEY(restaurant_id, weekday)
);

CREATE OR REPLACE FUNCTION AddOrUpdateOpeningHours(_restaurant_id UUID, _weekday WEEKDAY, _opens TIME, _closes TIME) RETURNS VOID AS $$
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
    restaurant_id UUID REFERENCES restaurant(id),
    description VARCHAR(512),
    rating SMALLINT NOT NULL CONSTRAINT rating_valid check (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY(uid, restaurant_id)
);