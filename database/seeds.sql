INSERT INTO category(id, name_en, name_sv) VALUES ('5ce82588-66fc-4581-9b8a-19ac1dc52a7a', 'Pizza', 'Pizza');
INSERT INTO category(id, name_en, name_sv) VALUES ('407807ab-488b-4801-ab35-672e2cd89128', 'Sushi', 'Sushi');
INSERT INTO category(id, name_en, name_sv) VALUES ('10cad461-89ce-4d87-8a4f-ea450b865858', 'Other', 'Övrigt');

-- Johanneberg restaurants

--Pizza
INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', 'Sannegårdens Pizzeria', '5ce82588-66fc-4581-9b8a-19ac1dc52a7a', 'https://sannes.chalmers.it', FALSE, 'johanneberg', 'https://goo.gl/maps/GT2hKANXrTK8VFJE8', 'Gibraltargatan 52', '+4631162613');

INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('bd3921a7-cbec-4078-9976-2e7f55399e79', 'Pizzeria Gibraltar', '5ce82588-66fc-4581-9b8a-19ac1dc52a7a', 'https://pizzeriagibraltar.com/', FALSE, 'johanneberg', 'https://g.page/pizzeria-gibraltar', 'Gibraltargatan 36', '+4631188674');

INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'Mossens Pizzeria', '5ce82588-66fc-4581-9b8a-19ac1dc52a7a', 'http://mossenspizzeria.se/', FALSE, 'johanneberg', 'https://goo.gl/maps/iiAmhx7RKjmGgZN77', 'Gibraltargatan 37', '+4631184442');

-- Sushi
INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('5ac07741-ce4b-482e-999d-ca5e081b52b8', 'Sushi me', '407807ab-488b-4801-ab35-672e2cd89128', NULL, FALSE, 'johanneberg', 'https://goo.gl/maps/hZffsFjzEUHoHy826', 'Gibraltargatan 44', '+4631188226');

INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('be5d138c-c0d4-4af4-a32e-95b494b85fcd', 'Johanneberg Sushi', '407807ab-488b-4801-ab35-672e2cd89128', 'http://johannebergsushi.se/meny', FALSE, 'johanneberg', 'https://g.page/johanneberg-sushi', 'Örnehufvudsgatan 1', '+4631160088');

--Other
INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('2369a3f0-0de9-4408-a24b-8af0113adc08', 'Miss Fajitas', '10cad461-89ce-4d87-8a4f-ea450b865858', NULL, FALSE, 'johanneberg', 'https://goo.gl/maps/Wsx6ywWpQTbaCsjp6', 'Gibraltargatan 54', '+4631168500');

INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('1b5a3e63-312d-4c45-87ef-38af7e1f9402', 'Not ready', '10cad461-89ce-4d87-8a4f-ea450b865858', NULL, TRUE, 'johanneberg', NULL, NULL, NULL);

-- Lindholmen restaurants
-- Pizza
INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'Lindholmens Kebab', '5ce82588-66fc-4581-9b8a-19ac1dc52a7a', null, FALSE, 'lindholmen', 'https://goo.gl/maps/d7ye5WZJNrk4HXRd9', 'Lindholmsallén 31', '+46317192619');

--Sushi
INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('8a7d2914-6fce-4f50-82a5-023a541c4068', 'Slimfood', '407807ab-488b-4801-ab35-672e2cd89128', 'http://slimfood.se/', FALSE, 'lindholmen', NULL, NULL, '+46313200085'); -- Maps is null to give more variety

--Other
INSERT
    INTO restaurant(id, name, category_id, menu, hidden, campus_location, maps_link, address, phone_number)
    VALUES ('93e5887f-db1b-4983-afa7-9b1b4c2bac08', 'Encounter Asian Cuisine', '10cad461-89ce-4d87-8a4f-ea450b865858', 'https://www.lindholmen.se/restauranger/encounter-asian-cuisine', FALSE, 'lindholmen', 'https://goo.gl/maps/ozuEdPQcE53jseR59', 'Karlavagnsgatan 16', NULL);

-- Opening hours
-- Restaurants open:
-- Monday - Friday 08:00 - 17:00
-- Saturday:       09:00 - 18:00
-- Sunday:         Closed
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', 'monday', '0800', '1700');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', 'tuesday', '0800', '1700');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', 'wednesday', '0800', '1700');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', 'thursday', '0800', '1700');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', 'friday', '0800', '1700');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', 'saturday', '0900', '1800');

--Restaurants open:
-- Monday           Closed
-- Tuesday - Sunday 08:00 - 02:00
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('bd3921a7-cbec-4078-9976-2e7f55399e79', 'tuesday', '0800', '0200');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('bd3921a7-cbec-4078-9976-2e7f55399e79', 'wednesday', '0800', '0200');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('bd3921a7-cbec-4078-9976-2e7f55399e79', 'thursday', '0800', '0200');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('bd3921a7-cbec-4078-9976-2e7f55399e79', 'friday', '0800', '0200');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('bd3921a7-cbec-4078-9976-2e7f55399e79', 'saturday', '0800', '0200');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('bd3921a7-cbec-4078-9976-2e7f55399e79', 'sunday', '0800', '2000');

----

INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('93e5887f-db1b-4983-afa7-9b1b4c2bac08', 'tuesday', '0800', '2000');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('93e5887f-db1b-4983-afa7-9b1b4c2bac08', 'wednesday', '0800', '2000');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('93e5887f-db1b-4983-afa7-9b1b4c2bac08', 'thursday', '0800', '2000');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('93e5887f-db1b-4983-afa7-9b1b4c2bac08', 'friday', '0800', '2000');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('93e5887f-db1b-4983-afa7-9b1b4c2bac08', 'saturday', '0800', '2000');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('93e5887f-db1b-4983-afa7-9b1b4c2bac08', 'sunday', '0800', '2000');


--Restaurants open:
-- Monday - Sunday 10:00 - 21:00
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'monday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'tuesday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'wednesday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'thursday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'friday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'saturday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('61f11d6b-252d-4389-89d8-ddcd4273ebe6', 'sunday', '1000', '2100');

----

INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'monday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'tuesday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'wednesday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'thursday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'friday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'saturday', '1000', '2100');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'sunday', '1000', '2100');


--Restaurants open:
-- Monday, Wednesday, Friday:           12:00 - 18:00
-- Tuesday, Thursday, Saturday, Sunday: Closed
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('5ac07741-ce4b-482e-999d-ca5e081b52b8', 'monday', '1200', '1800');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('5ac07741-ce4b-482e-999d-ca5e081b52b8', 'wednesday', '1200', '1800');
INSERT
    INTO opening_hours (restaurant_id, weekday, opens, closes)
    VALUES ('5ac07741-ce4b-482e-999d-ca5e081b52b8', 'friday', '1200', '1800');

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('88eec5c2-5ebb-4e13-9a76-fcc4dac9e74f', '5ac07741-ce4b-482e-999d-ca5e081b52b8', NULL, 3);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('0a799f6d-c65a-4d20-8588-2ff5375d6cce', '5ac07741-ce4b-482e-999d-ca5e081b52b8', NULL, 4);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('4efb340f-540c-4b15-a362-d402aab10195', '5ac07741-ce4b-482e-999d-ca5e081b52b8', 'This was a great restaurant!!', 5);


INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('88eec5c2-5ebb-4e13-9a76-fcc4dac9e74f', 'c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'Nope not for me', 1);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('0a799f6d-c65a-4d20-8588-2ff5375d6cce', 'c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'Great!!!!', 4);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('4efb340f-540c-4b15-a362-d402aab10195', 'c81fe007-2bd8-4e50-9fb8-5a56b52970e3', 'This was a great restaurant!!', 5);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('88eec5c2-5ebb-4e13-9a76-fcc4dac9e74f', '47097a83-7df7-478e-8f45-467b26d9f05e', NULL, 3);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('0a799f6d-c65a-4d20-8588-2ff5375d6cce', '47097a83-7df7-478e-8f45-467b26d9f05e', NULL, 4);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('4efb340f-540c-4b15-a362-d402aab10195', '47097a83-7df7-478e-8f45-467b26d9f05e', 'This was a great restaurant!!', 5);


INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('9ad8946d-cfef-4f6f-8b48-cfb536d0c9eb', '47097a83-7df7-478e-8f45-467b26d9f05e', 'Nope not for me', 1);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('bc605869-9a4d-46ec-8a29-d00819d4c195', '47097a83-7df7-478e-8f45-467b26d9f05e', 'Great!!!!', 4);

INSERT
    INTO review(uid, restaurant_id, description, rating)
    VALUES('ec8987d7-4087-461d-bed5-9365086b6e3b', '47097a83-7df7-478e-8f45-467b26d9f05e', 'This was a great restaurant!!', 5);

-- Menu (Sannegården)
INSERT
    INTO menu (restaurant_id, description, active)
    VALUES ('47097a83-7df7-478e-8f45-467b26d9f05e', '(Vanlig pizza) / (Familjepizza) priser', true);

-- categories

INSERT
    INTO menu_category (id, menu_restaurant_id, name_sv)
    VALUES ('eedf7d4d-81a5-4999-90f1-18d08bb6a8b5', '47097a83-7df7-478e-8f45-467b26d9f05e', 'Grupp 1');

INSERT
    INTO menu_category (id, menu_restaurant_id, name_sv)
    VALUES ('dbd310df-7284-4bb7-8be3-7b2d1ce00c5d', '47097a83-7df7-478e-8f45-467b26d9f05e', 'Grupp 2');

-- items

INSERT
    INTO menu_item (id, category_id, name_sv, description_sv, price)
    VALUES ('d4896703-ae19-43fe-8c99-cd079faf68ce', 'eedf7d4d-81a5-4999-90f1-18d08bb6a8b5', 'Kebabpizza', 'Ananas, Glass, Godis', '90/180kr');

INSERT
    INTO menu_item (id, category_id, name_sv, description_sv, price)
    VALUES ('7bffc4fa-2d9c-45a9-9c1e-28e4a60e7c1f', 'eedf7d4d-81a5-4999-90f1-18d08bb6a8b5', 'Hawaii', 'Ananas, Glass, Godis', '80/160kr');

INSERT
    INTO menu_item (id, category_id, name_sv, description_sv, price)
    VALUES ('1c3dfd6c-e5ef-41b5-8002-94c854b341b2', 'eedf7d4d-81a5-4999-90f1-18d08bb6a8b5', 'Marinara', 'Ananas, Glass, Godis', '85/170kr');

INSERT
    INTO menu_item (id, category_id, name_sv, description_sv, price)
    VALUES ('81f1e8fe-6298-4a42-a548-856539d05617', 'dbd310df-7284-4bb7-8be3-7b2d1ce00c5d', 'Bombay', 'Ananas, Glass, Godis', '85/170kr');

INSERT
    INTO menu_item (id, category_id, name_sv, description_sv, price)
    VALUES ('3789e8d4-075c-4a05-914c-844f95355407', 'dbd310df-7284-4bb7-8be3-7b2d1ce00c5d', 'Ravena', 'Ananas, Glass, Godis', '105/210kr');

INSERT
    INTO menu_item (id, category_id, name_sv, description_sv, price)
    VALUES ('0a3a7ece-a04e-4618-b94d-682be3a76f3c', 'dbd310df-7284-4bb7-8be3-7b2d1ce00c5d', 'Frutti', 'Ananas, Glass, Godis', '100/200kr');