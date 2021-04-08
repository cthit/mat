import * as yup from "yup";

export const reviewValidation = text =>
    yup.object().shape({
        rating: yup
            .number()
            .min(1)
            .max(5)
            .required(),
        description: yup
            .string()
            .max(2048, text.MaxLength2048Description)
            .nullable()
    });
