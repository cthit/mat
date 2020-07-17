import React from "react";
import Rating from "@material-ui/lab/Rating";
import styled from "styled-components";
import { DigitText } from "@cthit/react-digit-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const MatRating = ({
    upperLabel,
    name,
    onBlur,
    value,
    onChange,
    readOnly,
    large
}) => {
    return (
        <Column>
            <DigitText.Text text={upperLabel} />
            <Rating
                name={name}
                onChange={readOnly ? null : (e, newValue) => onChange(newValue)}
                value={value}
                readOnly={readOnly}
                onBlur={onBlur}
                size={large ? "large" : "medium"}
            />
        </Column>
    );
};

export default MatRating;
