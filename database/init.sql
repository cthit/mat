CREATE TYPE CAMPUS AS ENUM ('johanneberg', 'lindholmen');

CREATE TABLE category (
    id UUID PRIMARY KEY,
    name_en VARCHAR(32) UNIQUE,
    name_sv VARCHAR(32) UNIQUE
);

CREATE TABLE restaurant (
    id UUID PRIMARY KEY,
    name VARCHAR(32),
    category_id UUID REFERENCES category(id),
    menu VARCHAR(255),
    hidden BOOL DEFAULT FALSE,
    campus_location CAMPUS NOT NULL
);

CREATE TABLE review (
    uid UUID NOT NULL,
    restaurant_id UUID REFERENCES restaurant(id),
    description VARCHAR(512),
    rating SMALLINT NOT NULL CONSTRAINT rating_valid check (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY(uid, restaurant_id)
);