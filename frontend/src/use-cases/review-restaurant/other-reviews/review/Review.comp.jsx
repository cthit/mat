import React from "react";
import {
    DigitAvatar,
    DigitDesign,
    DigitText,
    DigitRating,
    DigitIconButton,
    useDigitDialog,
    useDigitTranslations,
    useDigitToast
} from "@cthit/react-digit-components";
import styled from "styled-components";
import CreatedUpdatedText from "../../../../common/components/created-updated-text";
import useAdmin from "../../../../common/hooks/use-admin/use-admin";
import Delete from "@material-ui/icons/Delete";
import { deleteReview } from "../../../../api/restaurants/delete.restaurants.api";

const Container = styled.div`
    padding: 1rem;

    display: grid;
    grid-template-columns: 40px auto;
    grid-auto-rows: auto;
    align-items: center;
    grid-column-gap: 1rem;
`;

const ReviewRating = styled(DigitRating)`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const Nick = styled(DigitText.Text)`
    margin-left: 4px;
`;

const Description = styled(DigitText.Text)`
    margin-top: 0.5rem;
    margin-left: 4px;
    grid-column-start: 1;
    grid-column-end: 3;
    max-height: 300px;
    overflow: auto;
`;

const DateContainer = styled.div`
    justify-self: flex-end;

    grid-column-start: 1;
    grid-column-end: 3;

    margin-top: 0.5rem;
    margin-left: 4px;
`;

const NickAndDeleteContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column-start: 2;
    grid-column-end: 3;
`;

const Review = ({ restaurantId, review, updateRestaurant }) => {
    const [text] = useDigitTranslations();
    const admin = useAdmin();
    const [openDialog] = useDigitDialog();
    const [queueToast] = useDigitToast();

    const onDelete = () => {
        openDialog({
            title: text.AreYouSure,
            description: text.OnlyDeleteReviewWhen,
            confirmButtonText: text.DeleteReview,
            cancelButtonText: text.Cancel,
            onConfirm: () =>
                deleteReview(restaurantId, review.reviewer.uid)
                    .then(() => {
                        updateRestaurant();
                        queueToast({
                            text: text.ReviewSaved
                        });
                    })
                    .catch(() => {
                        queueToast({
                            text: text.SomethingWentWrong
                        });
                    })
        });
    };

    return (
        <DigitDesign.Card>
            <Container>
                <DigitAvatar
                    alignSelf={"flex-start"}
                    gridColumn={{ start: "1", end: "2" }}
                    gridRow={{ start: "1", end: "3" }}
                    imageSrc={review.reviewer.avatarUrl}
                />
                <NickAndDeleteContainer>
                    <Nick bold text={review.reviewer.nick} />
                    {admin && (
                        <DigitIconButton
                            onClick={onDelete}
                            icon={Delete}
                            margin={"0"}
                            padding={"0"}
                        />
                    )}
                </NickAndDeleteContainer>
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
};

export default Review;
