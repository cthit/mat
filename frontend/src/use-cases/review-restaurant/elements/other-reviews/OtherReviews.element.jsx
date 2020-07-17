import React from "react";
import styled from "styled-components";
import { DigitText, useDigitTranslations } from "@cthit/react-digit-components";
import Review from "./elements/review";

const Container = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;

    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: min-content;
    grid-gap: 1rem;
`;

const TitleContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`;

const OtherReviews = ({ reviews }) => {
    const [text] = useDigitTranslations();

    return (
        <Container>
            <TitleContainer>
                <DigitText.Title text={text.OtherReviews} />
            </TitleContainer>
            {reviews.map(review => (
                <Review review={review} />
            ))}
        </Container>
    );
};

export default OtherReviews;
