import React from "react";
import { DigitDesign, DigitButton } from "@cthit/react-digit-components";
import { NonStyledALink } from "../../../../common-ui/design";
import styled from "styled-components";

const CardContainer = styled.div`
    @media (max-width: 767px) {
        max-width: calc(100vw - 32px);
        width: 400px;
        justify-self: center;
    }
`;

const EatIT = () => {
    return (
        <CardContainer>
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
        </CardContainer>
    );
};

export default EatIT;
