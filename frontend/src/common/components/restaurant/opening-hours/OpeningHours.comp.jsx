import React from "react";
import { DigitText, useDigitTranslations } from "@cthit/react-digit-components";
import styled from "styled-components";
import find from "lodash/find";

const Table = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 1.5rem;
    grid-column-start: 1;
    grid-column-end: 3;
`;

const weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

const formatOpeningHours = (openingHours, weekday, text) => {
    const day = find(openingHours, ["weekday", weekday]);
    if (day.opens == null) {
        return text.Closed;
    }

    const opens = day.opens.substr(0, day.opens.length - 3);
    const closes = day.closes.substr(0, day.closes.length - 3);
    return opens + " - " + closes;
};

const OpeningHours = ({ openingHours, currentWeekday }) => {
    const [text] = useDigitTranslations();

    return (
        <Table>
            {weekdays.map(weekday => (
                <React.Fragment key={weekday}>
                    <DigitText.Text
                        alignRight
                        text={text[weekday] + ":"}
                        bold={currentWeekday === weekday}
                    />
                    <DigitText.Text
                        text={formatOpeningHours(openingHours, weekday, text)}
                        bold={currentWeekday === weekday}
                    />
                </React.Fragment>
            ))}
        </Table>
    );
};

export default OpeningHours;
