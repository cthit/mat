const { getGammaUri, gammaSettings } = require("../utils/gamma");

const getUnprotectedRouter = require("./unprotected.router");
const getProtectedRouter = require("./protected.router");
const getAdminRouter = require("./admin.router");

const MAT_AUTHORITY = gammaSettings.authority;

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

const initRouters = (app, tools, createRouter) => {
    app.use("/api", getUnprotectedRouter(createRouter(), tools));
    app.use(
        "/api",
        ensureAuthentication,
        getProtectedRouter(createRouter(), tools)
    );
    app.use(
        "/api/admin",
        ensureAuthentication,
        ensureAdmin,
        getAdminRouter(createRouter(), tools)
    );
};

module.exports = initRouters;
