import React from "react";
import styled from "styled-components";

import { Spacing, FlexAlignCenter } from "../../../../common-ui/layout";
import { Text } from "../../../../common-ui/text";

export const OpenStatus = ({ status, openDisplayText }) => (
    <FlexAlignCenter>
        <Dot status={status} />
        <Spacing />
        <Text>{openDisplayText}</Text>
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
