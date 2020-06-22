import React from "react";
import {
    DigitDesign,
    DigitText,
    DigitButton
} from "@cthit/react-digit-components";
import { NonStyledALink } from "../../../../common-ui/design";

const EatIT = () => {
    return (
        <DigitDesign.Card size={{ height: "fit-content" }}>
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={"Sambeställa mat?"} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardBody>
                <NonStyledALink
                    href={"https://eatit.chalmers.it"}
                    target={"_blank"}
                >
                    <DigitButton
                        text={"Öppna eatit.chalmers.it"}
                        outlined
                        primary
                    />
                </NonStyledALink>
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};

export default EatIT;
