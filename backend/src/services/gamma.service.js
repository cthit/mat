const axios = require("axios");
const { gammaSettings } = require("../utils/gamma");

const apiKey = "key";

const update = (redisClient, resolve, reject) => {
    axios
        .get(gammaSettings.usersUri, {
            headers: { Authorization: "pre-shared " + apiKey }
        })
        .then(response => {
            redisClient
                .set(
                    "users",
                    JSON.stringify(response.data),
                    "ex",
                    60 * 60 * 60 * 3 //3h
                )
                .then(() => resolve(response.data))
                .catch(error => reject(error));
        });
};

const getUsers = async redisClient => {
    return new Promise((resolve, reject) => {
        redisClient
            .get("users")
            .then(result => {
                if (result == null) {
                    update(redisClient, resolve, reject);
                } else {
                    resolve(JSON.parse(result));
                }
            })
            .catch(() => update(redisClient, resolve, reject));
    });
};

module.exports = {
    getUsers
};
