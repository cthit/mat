import * as yup from "yup";

export const categoryValidation = text =>
    yup.object().shape({
        id: yup.string().uuid(),
        name_sv: yup
            .string()
            .max(32, text.MaxLength32)
            .required(text.SwedishNameRequired),
        name_en: yup
            .string()
            .max(32, text.MaxLength32)
            .required(text.EnglishNameRequired)
    });
