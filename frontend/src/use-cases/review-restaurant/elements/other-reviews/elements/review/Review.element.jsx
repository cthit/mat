import React from "react";
import {
    DigitAvatar,
    DigitDesign,
    DigitText
} from "@cthit/react-digit-components";
import styled from "styled-components";
import MatRating from "../../../../../../common/elements/mat-rating";
import CreatedUpdatedText from "../../../../../../common/elements/created-updated-text";

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Container = styled.div`
    padding: 1rem;

    display: grid;
    grid-template-columns: 40px auto;
    grid-auto-rows: auto;
    align-items: center;
    grid-column-gap: 1rem;
`;

const ReviewRating = styled(MatRating)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const Nick = styled(DigitText.Text)`
    grid-column-start: 2;
    grid-column-end: 3;

    margin-left: 4px;
`;

const Description = styled(DigitText.Text)`
    margin-top: 0.5rem;
    margin-left: 4px;
    grid-column-start: 1;
    grid-column-end: 3;
`;

const DateContainer = styled.div`
    justify-self: flex-end;

    grid-column-start: 1;
    grid-column-end: 3;

    margin-top: 0.5rem;
    margin-left: 4px;
`;

const Review = ({ review }) => (
    <DigitDesign.Card>
        <Container>
            <DigitAvatar
                alignSelf={"flex-start"}
                gridColumn={{ start: "1", end: "2" }}
                gridRow={{ start: "1", end: "3" }}
                imageSrc={review.reviewer.avatarUrl}
            />
            <Nick bold text={review.reviewer.nick} />
            <ReviewRating value={review.rating} readOnly />
            <Description text={review.description} />
            <DateContainer>
                <CreatedUpdatedText
                    updatedAt={review.updated_at}
                    createdAt={review.created_at}
                />
            </DateContainer>
        </Container>
    </DigitDesign.Card>
);

export default Review;
