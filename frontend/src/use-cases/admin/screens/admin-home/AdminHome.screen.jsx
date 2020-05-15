import React from "react";
import {
    DigitButton,
    DigitDesign,
    useDigitTranslations
} from "@cthit/react-digit-components";
import { useHistory } from "react-router-dom";

const AdminHome = () => {
    const [text] = useDigitTranslations();
    const history = useHistory();

    return (
        <DigitDesign.Card margin={"auto"} size={{ height: "100%" }}>
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={text.AdminOptions} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardBody>
                <DigitButton
                    outlined
                    text={text.Back}
                    onClick={() => history.goBack()}
                />
                <DigitButton
                    outlined
                    text={text.EditRestaurants}
                    onClick={() => history.push("/admin/restaurants")}
                />
                <DigitButton
                    outlined
                    text={text.EditCategories}
                    onClick={() => history.push("/admin/categories")}
                />
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};

export default AdminHome;
