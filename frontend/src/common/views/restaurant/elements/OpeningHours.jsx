import React from "react";
import styled from "styled-components";

import { Text } from "../../../../common-ui/text";
import { Spacing } from "../../../../common-ui/layout";

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
    <Spacing />
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
            <Spacing />
          </Cell>
        ))}
      </Column>
      <Spacing />
      <Column align="left">
        {openingHours.map(item => (
          <Cell key={item.startDay + item.openingHours}>
            {item.closingHours == null ? (
              <Text key={item.startDay + item.openingHours}>
                {item.openingHours}
                {/* openingHours will have the string 'Closed' if closingHours is null */}
              </Text>
            ) : (
              <Text key={item.startDay + item.openingHours}>
                {item.openingHours + " - " + item.closingHours}
              </Text>
            )}
            <Spacing />
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
`;

const Cell = styled.div`
  display: block;
`;
