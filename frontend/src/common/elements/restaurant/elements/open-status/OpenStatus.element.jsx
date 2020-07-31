import React from "react";
import styled from "styled-components";
import { DigitText, useDigitTranslations } from "@cthit/react-digit-components";

const OpenStatus = ({ openStatus }) => {
    const [text] = useDigitTranslations();

    const openDisplayText = text[openStatus];

    return (
        <>
            <Dot status={openStatus} />
            <DigitText.Text text={openDisplayText} />
        </>
    );
};

const Dot = styled.div`
    height: 20px;
    width: 20px;
    background-color: ${props =>
        props.status === "open"
            ? "#4CAF50"
            : props.status === "closed"
            ? "#F44336"
            : props.status === "closing-soon"
            ? "#FFEB3B"
            : "#FFFFFF"};
    border-radius: 50%;
    display: inline-block;
`;

export default OpenStatus;
