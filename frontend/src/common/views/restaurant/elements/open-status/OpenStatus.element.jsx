import React from "react";
import styled from "styled-components";

import { Spacing, FlexAlignCenter } from "../../../../../common-ui/layout";
import { DigitText } from "@cthit/react-digit-components";

const OpenStatus = ({ status, openDisplayText }) => (
    <FlexAlignCenter>
        <Dot status={status} />
        <Spacing />
        <DigitText.Text text={openDisplayText} />
    </FlexAlignCenter>
);

const Dot = styled.div`
    height: 15px;
    width: 15px;
    background-color: ${props =>
        props.status === "open"
            ? "#05c46b"
            : props.status === "closed"
            ? "#ff3f34"
            : "#FFEB3B"};
    border-radius: 50%;
    display: inline-block;
`;

export default OpenStatus;
