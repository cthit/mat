import React from "react";
import styled from "styled-components";
import { Text } from "../../common-ui/text";

export const Footer = () => (
    <FooterContainer>
        <Text>Think with Portals ❤</Text>
    </FooterContainer>
);

const FooterContainer = styled.div`
    text-align: center;
`;
