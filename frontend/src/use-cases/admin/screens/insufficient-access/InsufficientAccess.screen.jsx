import React from "react";
import {
    DigitText,
    DigitDesign,
    useDigitTranslations,
    DigitButton
} from "@cthit/react-digit-components";
import { useHistory } from "react-router-dom";

const InsufficientAccess = () => {
    const [text] = useDigitTranslations();
    const history = useHistory();

    return (
        <DigitDesign.Card margin={"auto"} size={{ width: "300px" }}>
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={text.InsufficientAccess} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardHeaderImage src="/403.gif" />
            <DigitDesign.CardBody>
                <DigitText.Text text={text.YouDontHaveAccess} />
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

export default InsufficientAccess;
