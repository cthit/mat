import React from "react";
import { DigitText } from "@cthit/react-digit-components";
import Phone from "@material-ui/icons/Phone";
import styled from "styled-components";

const NonStyledALink = styled.a`
    text-decoration: none; /* no underline */
`;

const PhoneNumber = ({ phoneNumber }) => (
    <>
        <Phone />
        <NonStyledALink href={"tel:" + phoneNumber}>
            <DigitText.Text text={phoneNumber} />
        </NonStyledALink>
    </>
);

export default PhoneNumber;
