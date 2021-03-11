import React from "react";
import {
    DigitDesign,
    DigitButton,
    useDigitTranslations
} from "@cthit/react-digit-components";
import { NonStyledALink } from "../../../../common-ui/design";
import styled from "styled-components";

const CardContainer = styled.div`
    @media (max-width: 767px) {
        max-width: calc(100vw - 32px);
        width: 400px;
        justify-self: center;
    }
`;

const ButtonCenterer = styled.div`
    display: block;
    margin: auto;
`;

const EatIT = () => {
    const [text] = useDigitTranslations();

    return (
        <CardContainer>
            <DigitDesign.Card size={{ height: "fit-content" }}>
                <DigitDesign.CardHeader>
                    <DigitDesign.CardTitle text={text.CoOrderFood} />
                </DigitDesign.CardHeader>
                <DigitDesign.CardBody>
                    <ButtonCenterer>
                        <NonStyledALink
                            href={"https://eatit.chalmers.it"}
                            target={"_blank"}
                        >
                            <DigitButton
                                text={text.OpenEatIT}
                                outlined
                                primary
                            />
                        </NonStyledALink>
                    </ButtonCenterer>
                </DigitDesign.CardBody>
            </DigitDesign.Card>
        </CardContainer>
    );
};

export default EatIT;
