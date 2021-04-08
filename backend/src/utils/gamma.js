const axios = require("axios");

const gammaBaseUrl =
    process.env.GAMMA_BASE_URL || "http://gamma-backend:8081/api";
const gammaSettings = {
    apiKey: process.env.GAMMA_API_KEY || "key",
    authority: process.env.GAMMA_AUTHORITY || "admin",
    clientId: process.env.GAMMA_CLIENT_ID || "id",
    clientSecret: process.env.GAMMA_CLIENT_SECRET || "secret",
    meUri: gammaBaseUrl + (process.env.GAMMA_ME_URI || "/users/me"),
    tokenUri: gammaBaseUrl + (process.env.GAMMA_TOKEN_URI || "/oauth/token"),
    usersUri: gammaBaseUrl + (process.env.GAMMA_USERS_URI || "/users/minified"),
    authorizationUrl:
        process.env.GAMMA_AUTHORIZATION_URL ||
        "http://localhost:8081/api/oauth/authorize",
    redirectUri:
        process.env.GAMMA_REDIRECT_URL ||
        "http://localhost:3001/auth/account/callback"
};

const getGammaUri = () => {
    const responseType = "response_type=code";
    const clientId = "client_id=" + gammaSettings.clientId;
    const redirectUri = "redirect_uri=" + gammaSettings.redirectUri;
    return (
        gammaSettings.authorizationUrl +
        "?" +
        responseType +
        "&" +
        clientId +
        "&" +
        redirectUri
    );
};

async function getMe(token) {
    return axios.get(gammaSettings.meUri, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
}

async function postGammaToken(code) {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", gammaSettings.clientId);
    params.append("redirect_uri", gammaSettings.redirectUri);
    params.append("code", code);

    const c = Buffer.from(
        gammaSettings.clientId + ":" + gammaSettings.clientSecret
    ).toString("base64");

    return axios.post(gammaSettings.tokenUri + "?" + params.toString(), null, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + c
        }
    });
}

module.exports = {
    getGammaUri,
    postGammaToken,
    getMe,
    gammaSettings
};
