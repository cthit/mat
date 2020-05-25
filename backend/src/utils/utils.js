const to = promise => {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => [err]);
};

const v4UUIDPattern = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
);

const renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
    [newProp]: old,
    ...others
});

const yupToFormErrors = yupError => {
    const errors = {};
    if (yupError.inner) {
        for (var i = 0; i < yupError.inner.length; i++) {
            const fieldError = yupError.inner[i];
            errors[fieldError.path] = fieldError.message;
        }
    }
    return errors;
};

const validateSchema = async (schema, data) => {
    const [schemaErr] = await to(
        schema.validate(data, {
            abortEarly: false
        })
    );
    return schemaErr == null ? null : yupToFormErrors(schemaErr);
};

module.exports = {
    to,
    renameProp,
    validateSchema
};
