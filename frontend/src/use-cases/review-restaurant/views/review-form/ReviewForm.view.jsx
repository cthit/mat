import React from "react";
import {
    DigitEditDataCard,
    DigitTextArea,
    useDigitTranslations
} from "@cthit/react-digit-components";
import MatRating from "../../../../common/elements/mat-rating";
import * as yup from "yup";
import { setReview } from "../../../../api/restaurants/post.restaurants.api";
import { NO_REVIEW } from "../../ReviewRestaurant";

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
                    component: MatRating,
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
            validationSchema={yup.object().shape({
                rating: yup
                    .number()
                    .min(1)
                    .max(5)
                    .required(),
                description: yup.string()
            })}
        />
    );
};

export default ReviewForm;
