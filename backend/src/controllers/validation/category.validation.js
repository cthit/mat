const yup = require("yup");

module.exports = () =>
    yup.object().shape({
        id: yup.string().uuid(),
        name_sv: yup
            .string()
            .max(32)
            .required(),
        name_en: yup
            .string()
            .max(32)
            .required()
    });
