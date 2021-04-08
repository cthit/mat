const yup = require("yup");

const hourMinuteRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

module.exports = () =>
    yup.array().of(
        yup.object().shape({
            open: yup.bool(),
            opens: yup
                .string()
                .nullable()
                .when("open", {
                    is: true,
                    then: yup.string().matches(hourMinuteRegex)
                }),
            closes: yup
                .string()
                .nullable()
                .when("open", {
                    is: true,
                    then: yup.string().matches(hourMinuteRegex)
                })
        })
    );
