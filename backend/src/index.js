//PostgresQL setup
const { getQuery } = require("./setup/db.setup");
const query = getQuery();

//Redis setup
const { getRedisClient } = require("./setup/redis.setup");
const redisClient = getRedisClient();

//Express setup
const { app, createRouter } = require("./setup/server.setup");

const getSessionMiddleware = require("./middlewares/session");
app.use(getSessionMiddleware(app, redisClient));

const initRouters = require("./routers");

const tools = { query, redisClient };

initRouters(app, tools, createRouter);
