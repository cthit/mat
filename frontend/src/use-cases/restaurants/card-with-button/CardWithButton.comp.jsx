import React from "react";
import { DigitDesign, DigitButton } from "@cthit/react-digit-components";
import styled from "styled-components";
import Launch from "@material-ui/icons/Launch";

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

const NonStyledALink = styled.a`
    text-decoration: none; /* no underline */
`;

const CardWithButton = ({ title, link, buttonText }) => {
    return (
        <CardContainer>
            <DigitDesign.Card size={{ height: "fit-content" }}>
                <DigitDesign.CardHeader>
                    <DigitDesign.CardTitle text={title} />
                </DigitDesign.CardHeader>
                <DigitDesign.CardBody>
                    <ButtonCenterer>
                        <NonStyledALink href={link} target={"_blank"}>
                            <DigitButton
                                text={buttonText}
                                outlined
                                primary
                                endIcon={<Launch />}
                            />
                        </NonStyledALink>
                    </ButtonCenterer>
                </DigitDesign.CardBody>
            </DigitDesign.Card>
        </CardContainer>
    );
};

export default CardWithButton;
