const yup = require("yup");

module.exports = () =>
    yup.object().shape({
        id: yup.string().uuid(),
        name: yup
            .string()
            .max(32)
            .required(),
        category_id: yup
            .string()
            .uuid()
            .required(),
        menu: yup
            .string()
            .max(1024)
            .nullable()
            .url(),
        campus_location: yup.string().oneOf(["johanneberg", "lindholmen"]),
        maps_link: yup
            .string()
            .max(1024)
            .nullable()
            .url(),
        phone_number: yup
            .string()
            .matches(/^\+46[0-9]*$/, {
                excludeEmptyString: true
            })
            .nullable(),
        address: yup
            .string()
            .max(1024)
            .nullable(),
        hidden: yup.bool()
    });
