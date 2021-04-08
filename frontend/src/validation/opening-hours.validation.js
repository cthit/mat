import * as yup from "yup";

export const openingHoursValidation = () =>
    yup.object().shape({
        openingHours: yup.array().of(
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
        )
    });
