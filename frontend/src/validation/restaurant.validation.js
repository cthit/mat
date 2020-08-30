import * as yup from "yup";

export const restaurantValidation = text =>
    yup.object().shape({
        id: yup.string().uuid(),
        name: yup
            .string()
            .max(32)
            .required(),
        category_id: yup
            .string()
            .uuid(text.CategoryMustBeChosen)
            .required(),
        menu: yup
            .string()
            .max(1024, text.MaxLength1024)
            .nullable()
            .url(text.NotValidURL),
        campus_location: yup.string().oneOf(["johanneberg", "lindholmen"]),
        maps_link: yup
            .string()
            .max(1024, text.MaxLength1024)
            .nullable()
            .url(text.NotValidURL),
        phone_number: yup
            .string()
            .matches(/^\+46[0-9]*$/, {
                excludeEmptyString: true,
                message: text.PhoneNumberValidation
            })
            .nullable(),
        address: yup
            .string()
            .max(1024, text.MaxLength1024)
            .nullable(),
        hidden: yup.bool()
    });
