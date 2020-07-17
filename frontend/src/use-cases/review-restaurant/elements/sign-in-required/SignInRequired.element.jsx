import React from "react";
import {
    DigitButton,
    DigitDesign,
    DigitText,
    useDigitTranslations
} from "@cthit/react-digit-components";

const SignInRequired = () => {
    const [text] = useDigitTranslations();

    return (
        <DigitDesign.Card>
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={text.SignInRequired} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardBody>
                <DigitText.Text text={text.SignInRequiredText} />
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};
export default SignInRequired;
