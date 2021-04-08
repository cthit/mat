const v4UUIDPattern = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
);

const idIsUUIDMiddleware = (req, res, next) => {
    const { id } = req.params;
    if (id != null && !id.match(v4UUIDPattern)) {
        res.status(400).send("id is not an UUID");
    } else {
        next();
    }
};

module.exports = idIsUUIDMiddleware;
