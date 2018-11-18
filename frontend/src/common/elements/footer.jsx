import React from "react";
import styled from "styled-components";
import { DigitText } from "@cthit/react-digit-components";

export const Footer = () => (
    <FooterContainer>
        <DigitText.Text text="Think with Portals ❤" />
    </FooterContainer>
);

const FooterContainer = styled.div`
    text-align: center;
`;
