const axios = require("axios");
const { gammaSettings } = require("../utils/gamma");

const apiKey = "key";

//TODO: Cache
const getUsers = async () => {
    return new Promise(resolve => {
        axios
            .get(gammaSettings.usersUri, {
                headers: { Authorization: "pre-shared " + apiKey }
            })
            .then(response => {
                resolve(response.data);
            });
    });
};

module.exports = {
    getUsers
};
