import React from "react";
import {
    DigitDesign,
    useDigitTranslations,
    DigitText
} from "@cthit/react-digit-components";

const translations = {
    SomethingWentWrong: [
        "500 - Something went wrong",
        "500 - Någonting gick fel"
    ],
    Contact: [
        "If this happens often, please send a mail with what you tried to do to digit@chalmers.it",
        "Om det här händer ofta, skicka ett mail till digit@chalmers.it med vad du försökte göra"
    ]
};

const FiveZeroZero = () => {
    const [text] = useDigitTranslations(translations);

    return (
        <DigitDesign.Card>
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={text.SomethingWentWrong} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardBody>
                <DigitText.Text text={text.Contact} />
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};

export default FiveZeroZero;
