const jwt = require("jsonwebtoken");
const { getGammaUri } = require("../utils/gamma");
const { postGammaToken, getMe } = require("../utils/gamma");
const { to } = require("../utils/utils");

const handleGetMe = async (req, res) => {
    const [err, response] = await to(getMe(req.session.token));

    if (response) {
        res.status(200).send(response.data);
    } else if (err.response && err.response.status === 401) {
        res.status(401).send(getGammaUri());
    } else {
        console.log(err);
        res.status(500).send(
            "Something went wrong when trying to get information about you"
        );
    }
};

const handleOAuthCode = async (req, res) => {
    const { code } = req.body;
    if (code == null) {
        res.status(422).send("no code provided");
        return;
    }

    const [err, response] = await to(postGammaToken(code));
    if (err) {
        if (err.response && err.response.status === 401) {
            res.status(401).send(getGammaUri());
        } else {
            res.status(500);
            console.log(err);
        }
    } else {
        const { access_token, expires_in } = response.data;
        //Todo set the maxAge to something that expires_in.
        //req.session.cookie.maxAge = expires_in;
        payload = jwt.decode(access_token);
        req.session.uid = payload.uid;
        req.session.cid = payload.user_name;
        req.session.nick = payload.nick;
        req.session.authorities = payload.authorities;
        req.session.token = access_token;
        res.status(200).send("session created");
    }
};

module.exports = {
    handleGetMe,
    handleOAuthCode
};
