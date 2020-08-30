const yup = require("yup");

module.exports = reviewValidation = () =>
    yup.object().shape({
        rating: yup
            .number()
            .min(1)
            .max(5)
            .required(),
        description: yup
            .string()
            .max(2048)
            .nullable()
    });
