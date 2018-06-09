import React from "react";
import styled from "styled-components";

import { Spacing, FlexCenter } from "../../../common-ui/layout";
import { Text } from "../../../common-ui/text";

export const OpenStatus = ({ status, openDisplayText }) => (
  <FlexCenter>
    <Dot status={status} />
    <Spacing />
    <Text>{openDisplayText}</Text>
  </FlexCenter>
);

const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${props =>
    props.status === "open" ? "#05c46b" : "#ff3f34"};
  border-radius: 50%;
  display: inline-block;
`;
