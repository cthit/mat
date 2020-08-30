import React from "react";
import {
    DigitCRUD,
    DigitTextField,
    useDigitTranslations
} from "@cthit/react-digit-components";
import {
    getCategories,
    getCategory
} from "../../../../api/categories/get.categories.api";
import { addCategory } from "../../../../api/categories/post.categories.api";
import { editCategory } from "../../../../api/categories/put.categories.api";
import { deleteCategory } from "../../../../api/categories/delete.categories.api";
import { categoryValidation } from "../../../../validation/category.validation";

const AdminCategories = () => {
    const [text, activeLanguage] = useDigitTranslations();

    return (
        <DigitCRUD
            path={"/admin/categories"}
            name={"AdminCategories"}
            readAllRequest={getCategories}
            createRequest={addCategory}
            readOneRequest={getCategory}
            updateRequest={editCategory}
            deleteRequest={deleteCategory}
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
            keysOrder={["id", "name_sv", "name_en"]}
            readAllKeysOrder={["name_sv", "name_en"]}
            keysText={{
                id: "Id",
                name_sv: text.SwedishName,
                name_en: text.EnglishName
            }}
            useKeyTextsInUpperLabel
            useHistoryGoBackOnBack
            tableProps={{
                titleText: text.Categories,
                startOrderBy: "name_sv",
                idProp: "id",
                margin: "auto",
                search: true,
                flex: "1",
                startOrderByDirection: "asc",
                size: { minWidth: "288px" },
                padding: "0px"
            }}
            detailsButtonText={text.Details}
            idProp={"id"}
            readAllBackButton
            toastCreateFailed={() => text.CreateCategoryFailed}
            toastCreateSuccessful={() => text.CreateCategorySuccess}
            toastUpdateFailed={() => text.UpdateCategoryFailed}
            toastUpdateSuccessful={() => text.UpdateCategorySuccess}
            toastDeleteFailed={() => text.DeleteCategoryFailed}
            toastDeleteSuccessful={() => text.DeleteCategorySuccess}
            updateButtonText={() => text.UpdateCategory}
            backButtonText={text.Back}
            deleteButtonText={() => text.DeleteCategory}
            createButtonText={text.CreateCategory}
            createTitle={text.CreateCategory}
            updateTitle={() => text.UpdateCategory}
            detailsTitle={one => one["name_" + activeLanguage]}
            dialogDeleteTitle={() => text.AreYouSure}
            dialogDeleteConfirm={() => text.DeleteCategory}
            dialogDeleteCancel={() => text.Cancel}
            formValidationSchema={categoryValidation(text)}
        />
    );
};

export default AdminCategories;
