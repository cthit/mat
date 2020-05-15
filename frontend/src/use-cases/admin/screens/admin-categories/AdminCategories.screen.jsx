import React from "react";
import {
    DigitCRUD,
    DigitTextField,
    useDigitTranslations
} from "@cthit/react-digit-components";
import { getCategories } from "../../../../api/categories/get.categories.api";
import { addCategory } from "../../../../api/categories/post.categories.api";

const AdminCategories = () => {
    const [text] = useDigitTranslations();

    return (
        <DigitCRUD
            path={"/admin/categories"}
            name={"AdminCategories"}
            readAllRequest={getCategories}
            createRequest={addCategory}
            formInitialValues={{
                name_sv: "",
                name_en: ""
            }}
            formComponentData={{
                name_sv: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true
                    }
                },
                name_en: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true
                    }
                }
            }}
            keysOrder={["name_sv", "name_en"]}
            keysText={{
                name_sv: text.SwedishName,
                name_en: text.EnglishName
            }}
            useKeyTextsInUpperLabel
            useHistoryGoBackOnBack
            tableProps={{
                titleText: text.Categories,
                search: true,
                startOrderBy: "name_sv",
                idProp: "name_sv",
                flex: "1",
                startOrderByDirection: "asc",
                size: { minWidth: "288px", width: "500px", maxWidth: "500px" },
                margin: "auto"
            }}
        />
    );
};

export default AdminCategories;
