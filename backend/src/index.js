//PostgresQL setup
const { getQuery } = require("./setup/db.setup");

//Redis setup
const { getRedisClient } = require("./setup/redis.setup");
const redisClient = getRedisClient();

//Express setup
const { app, createRouter } = require("./setup/server.setup");

const getSessionMiddleware = require("./middlewares/session");
app.use(getSessionMiddleware(app, redisClient));

const initRouters = require("./routers");
initRouters(app, getQuery(), createRouter);

/*
 * index
 *  - name (Mat)
 *  - link_to_menu (Mat)
 *  - category (Mat)
 *  - ratings (Google)
 *  - website (Google)
 *  - formatted_phone_number (Google)
 *  - formatted_address (Google)
 *  - opening_hours (Google)
 *      - periods[]
 *          - open
 *              - day
 *              - time
 *          - closed
 *
 */
