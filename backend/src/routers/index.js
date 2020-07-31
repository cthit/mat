const { getGammaUri } = require("../utils/gamma");

const getUnprotectedRouter = require("./unprotected.router");
const getProtectedRouter = require("./protected.router");
const getAdminRouter = require("./admin.router");

const MAT_AUTHORITY = "admin";

const ensureAuthentication = (req, res, next) => {
    if (req.session.token) {
        next();
    } else {
        res.status(401).send(getGammaUri());
    }
};

const ensureAdmin = (req, res, next) => {
    const authorities = req.session.user.authorities;
    if (authorities.map(({ authority }) => authority).includes(MAT_AUTHORITY)) {
        next();
    } else {
        res.status(403).send("FORBIDDEN");
    }
};

const initRouters = (app, query, createRouter) => {
    app.use("/api", getUnprotectedRouter(createRouter(), query));
    app.use(
        "/api",
        ensureAuthentication,
        getProtectedRouter(createRouter(), query)
    );
    app.use(
        "/api/admin",
        ensureAuthentication,
        ensureAdmin,
        getAdminRouter(createRouter(), query)
    );
};

module.exports = initRouters;
