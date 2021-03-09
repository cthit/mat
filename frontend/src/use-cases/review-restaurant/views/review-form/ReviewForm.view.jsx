import React from "react";
import {
    DigitEditDataCard,
    DigitTextArea,
    useDigitTranslations,
    DigitRating
} from "@cthit/react-digit-components";
import { NO_REVIEW } from "../../ReviewRestaurant";
import { reviewValidation } from "../../../../validation/review.validation";

const ReviewForm = ({ loading, userReview, onSubmit }) => {
    const [text] = useDigitTranslations();

    if (loading) {
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
                        large: true
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
        />
    );
};

export default ReviewForm;
