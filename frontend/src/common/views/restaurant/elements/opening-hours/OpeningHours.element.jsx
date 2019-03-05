import React from "react";
import styled from "styled-components";
import { concatStrings } from "../../formatter/ConcatTwoStringsFormatter";
import { DigitText, DigitLayout } from "@cthit/react-digit-components";
import _ from "lodash";

/**
 * openingHours is an array, every element in the array should have the following:
 * - startDay (String)
 * - endDay (String)
 * - openingHours (String)
 * - closingHours (String)
 */

const OpeningHours = ({ openingHours }) => (
    <DigitLayout.Column marginVertical={"4px"}>
        <DigitText.Text text="Öppetider:" />
        <DigitLayout.Column marginVertical={"4px"}>
            {openingHours.map(item => (
                <DigitLayout.Row
                    fillElement
                    marginHorizontal={"4px"}
                    key={item.startDay + ";" + item.closingHours} //Something random
                >
                    <DigitText.Text
                        text={concatStrings(
                            _.capitalize(item.startDay),
                            _.capitalize(item.endDay),
                            " - ",
                            item.startDay === item.endDay,
                            ":"
                        )}
                    />
                    <DigitText.Text
                        text={concatStrings(
                            item.openingHours,
                            item.closingHours,
                            " - ",
                            item.closingHours == null,
                            ""
                        )}
                    />
                </DigitLayout.Row>
            ))}
        </DigitLayout.Column>
    </DigitLayout.Column>
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

export default OpeningHours;
