const session = require("express-session");
let RedisStore = require("connect-redis")(session);

const SESSION_NAME = "mat-session";
const SECRET = "secret";
const AGE = 365 * 24 * 60 * 60 * 1000;
const SECURE = process.env.NODE_ENV === "production";
const DOMAIN = "localhost";

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
