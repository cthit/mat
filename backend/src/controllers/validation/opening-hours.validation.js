const yup = require("yup");

module.exports = () =>
    yup.array().of(
        yup.object().shape({
            open: yup.bool(),
            opens: yup
                .date()
                .nullable()
                .when("open", {
                    is: true,
                    then: yup.date().required()
                }),
            closes: yup
                .date()
                .nullable()
                .when("open", {
                    is: true,
                    then: yup.date().required()
                })
        })
    );
