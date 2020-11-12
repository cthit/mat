const session = require("express-session");
let RedisStore = require("connect-redis")(session);

const SESSION_NAME = process.env.MAT_COOKIE_NAME || "mat";
const SECRET = process.env.MAT_COOKIE_SECRET || "secret";
const AGE = process.env.MAT_COOKIE_AGE || 365 * 24 * 60 * 60 * 1000;
const DOMAIN = process.env.MAT_COOKIE_DOMAIN || "localhost";
const SECURE = process.env.NODE_ENV === "production";

const getSessionSettings = redisClient => ({
    name: SESSION_NAME,
    store: new RedisStore({ client: redisClient }),
    secret: SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: AGE,
        httpOnly: true,
        sameSite: true,
        secure: SECURE,
        domain: DOMAIN
    }
});

const getSessionMiddleware = (app, redisClient) => {
    if (app.get("env") === "production") {
        app.set("trust proxy", 1);
    }

    return session(getSessionSettings(redisClient));
};

module.exports = getSessionMiddleware;
