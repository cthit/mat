import React, { useMemo } from "react";
import styled from "styled-components";
import { DigitText, useDigitTranslations } from "@cthit/react-digit-components";
import Review from "./elements/review";

const TitleContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;
`;

const OtherReviews = ({ reviews }) => {
    const [text] = useDigitTranslations();

    const sortedReviews = useMemo(
        () =>
            [...reviews].sort(
                (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
            ),
        [reviews]
    );

    return (
        <>
            {sortedReviews.length > 0 && (
                <>
                    <TitleContainer>
                        <DigitText.Title text={text.OtherReviews} />
                    </TitleContainer>
                    {sortedReviews.map(review => (
                        <Review key={review.reviewer.uid} review={review} />
                    ))}
                </>
            )}
            {sortedReviews.length === 0 && (
                <TitleContainer>
                    <DigitText.Title text={text.NoOtherReviews} />
                </TitleContainer>
            )}
        </>
    );
};

export default OtherReviews;
