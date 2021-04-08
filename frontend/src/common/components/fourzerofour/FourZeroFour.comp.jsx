import React from "react";
import {
    useDigitTranslations,
    DigitDesign,
    DigitText,
    DigitButton
} from "@cthit/react-digit-components";
import { useHistory } from "react-router-dom";

const FourZeroFour = () => {
    const [text] = useDigitTranslations();
    const history = useHistory();

    return (
        <DigitDesign.Card margin={"auto"} size={{ width: "300px" }}>
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={text.PageNotFound} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardHeaderImage src="/404.jpg" />
            <DigitDesign.CardBody>
                <DigitText.Text
                    text={
                        "This is not the site you're looking for! " +
                        text.ContactDigit
                    }
                />
            </DigitDesign.CardBody>
            <DigitDesign.CardButtons>
                <DigitButton
                    onClick={() => history.push("/")}
                    outlined
                    text={text.Back}
                />
            </DigitDesign.CardButtons>
        </DigitDesign.Card>
    );
};

export default FourZeroFour;
