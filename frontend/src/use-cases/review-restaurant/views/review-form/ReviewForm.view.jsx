import React from "react";
import {
    DigitDesign,
    DigitEditDataCard,
    DigitTextArea,
    useDigitTranslations
} from "@cthit/react-digit-components";
import MatRating from "../../../../common/elements/mat-rating";
import * as yup from "yup";
import { setReview } from "../../../../api/restaurants/post.restaurants.api";

const ReviewForm = ({
    restaurantId,
    userReview = { rating: 0, description: "" }
}) => {
    const [text] = useDigitTranslations();

    return (
        <DigitEditDataCard
            size={{ width: "100%" }}
            flex={"1"}
            titleText={text.YourReview}
            submitText={text.Save}
            onSubmit={values => {
                setReview({
                    ...values,
                    restaurant_id: restaurantId
                });
            }}
            initialValues={userReview}
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
