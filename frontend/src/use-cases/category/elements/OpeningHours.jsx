import React from "react";
import styled from "styled-components";

import { Text } from "../../../common-ui/text";

/**
 * openingHours is an array, every element in the array should have the following:
 * - startDay (String)
 * - endDay (String)
 * - openingHours (String)
 * - closingHours (String)
 */

export const OpeningHours = ({ openingHours }) => (
  <div>
    <Text>Öppetider:</Text>
    <Row>
      <Column align="right">
        {openingHours.map(item => (
          <Cell key={item.startDay}>
            {item.startDay === item.endDay ? (
              <Text key={item.startDay}>{item.startDay + ":"}</Text>
            ) : (
              <Text key={item.startDay}>
                {item.startDay + " - " + item.endDay + ":"}
              </Text>
            )}
          </Cell>
        ))}
      </Column>
      <Column align="left">
        {openingHours.map(item => (
          <Cell key={item.startDay + item.openingHours}>
            <Text key={item.startDay + item.openingHours}>
              {item.openingHours + " - " + item.closingHours}
            </Text>
          </Cell>
        ))}
      </Column>
    </Row>
  </div>
);

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const Column = styled.div`
  flex: 50%;
  text-transform: capitalize;
  text-align: ${props => (props.align != null ? props.align : "none")};
  padding: 5px;
`;

const Cell = styled.div`
  display: block;
`;
