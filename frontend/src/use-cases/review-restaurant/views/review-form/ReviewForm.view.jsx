import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    DigitEditDataCard,
    DigitTextArea,
    useDigitTranslations,
    DigitRating,
    useGammaMe,
    useDigitToast,
    useDigitDialog
} from "@cthit/react-digit-components";
import { NO_REVIEW } from "../../ReviewRestaurant";
import { reviewValidation } from "../../../../validation/review.validation";
import { deleteReview } from "../../../../api/restaurants/delete.restaurants.api";

const ReviewForm = ({
    loading,
    restaurantId,
    userReview,
    onSubmit,
    updateRestaurant
}) => {
    const [toggleFormRefresh, setToggleFormRefresh] = useState(false);
    const [text] = useDigitTranslations();
    const user = useGammaMe();
    const [queueToast] = useDigitToast();
    const [openDialog] = useDigitDialog();

    const onDelete = useCallback(() => {
        openDialog({
            title: text.AreYouSure,
            confirmButtonText: text.DeleteReview,
            cancelButtonText: text.Cancel,
            onConfirm: () =>
                deleteReview(restaurantId, user.id)
                    .then(() => {
                        updateRestaurant();
                        setToggleFormRefresh(true);
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
    }, [
        openDialog,
        text,
        restaurantId,
        user,
        updateRestaurant,
        setToggleFormRefresh,
        queueToast
    ]);

    const extraButtonProps = useMemo(() => {
        if (userReview === "no-review") {
            return {};
        } else {
            return {
                extraButton: {
                    text: text.DeleteReview,
                    secondary: true,
                    outlined: true,
                    onClick: onDelete
                }
            };
        }
    }, [userReview, text, onDelete]);

    //This is used since there's no way to access DigitEditDataCard and reset the form
    useEffect(() => {
        if (toggleFormRefresh) {
            setTimeout(() => {
                setToggleFormRefresh(false);
            }, 100);
        }
    }, [toggleFormRefresh, setToggleFormRefresh]);

    if (loading || toggleFormRefresh) {
        return null;
    }

    return (
        <DigitEditDataCard
            size={{ width: "100%" }}
            flex={"1"}
            titleText={text.YourReview}
            submitText={text.Save}
            onSubmit={values => onSubmit(values)}
            initialValues={
                userReview == null || userReview === NO_REVIEW
                    ? { rating: 0, description: "" }
                    : userReview
            }
            keysComponentData={{
                rating: {
                    component: DigitRating,
                    componentProps: {
                        upperLabel: text.YourRating,
                        large: true,
                        precision: 1
                    }
                },
                description: {
                    component: DigitTextArea,
                    componentProps: {
                        upperLabel: text.YourDescription,
                        outlined: true,
                        flex: "1",
                        size: {
                            width: "100%"
                        },
                        rows: 5,
                        rowsMax: 10
                    }
                }
            }}
            keysOrder={["rating", "description"]}
            validationSchema={reviewValidation(text)}
            {...extraButtonProps}
        />
    );
};

export default ReviewForm;
