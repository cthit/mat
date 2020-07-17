const axios = require("axios");

const gammaBaseUrl = "http://gamma-backend:8081/api";
const gammaSettings = {
    clientId: "id",
    clientSecret: "secret",
    meUri: gammaBaseUrl + "/users/me",
    tokenUri: gammaBaseUrl + "/oauth/token",
    usersUri: gammaBaseUrl + "/users/minified",
    authorizationUri: "http://localhost:8081/api/oauth/authorize",
    redirectUri: "http://localhost:3001/auth/account/callback"
};

const getGammaUri = () => {
    const responseType = "response_type=code";
    const clientId = "client_id=" + gammaSettings.clientId;
    const redirectUri = "redirect_uri=" + gammaSettings.redirectUri;
    return (
        gammaSettings.authorizationUri +
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
