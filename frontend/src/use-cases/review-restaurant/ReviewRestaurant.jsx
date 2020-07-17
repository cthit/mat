import React, { useEffect, useState } from "react";
import { getRestaurant } from "../../api/restaurants/get.restaurants.api";
import { DigitLoading, useGammaMe } from "@cthit/react-digit-components";
import styled from "styled-components";
import Restaurant from "../../common/elements/restaurant";
import ReviewForm from "./views/review-form";
import OtherReviews from "./elements/other-reviews";
import find from "lodash/find";
import SignInRequired from "./elements/sign-in-required";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    grid-auto-rows: min-content;
    grid-gap: 1rem;
    flex: 1;
    justify-content: center;
    align-content: center;
`;

const ReviewRestaurant = ({ match }) => {
    const { id } = match.params;
    const user = useGammaMe();
    const userId = user == null ? null : user.id;

    const [restaurant, setRestaurant] = useState(null);
    const [userReview, setUserReview] = useState(null);

    useEffect(() => {
        getRestaurant(id).then(response => {
            setRestaurant(response.data);
            setUserReview(
                userId == null
                    ? null
                    : find(response.data.reviews, ["uid", userId])
            );
        });
    }, [id, userId]);

    if (restaurant == null) {
        return (
            <DigitLoading
                margin={{ left: "auto", right: "auto", top: "32px" }}
                loading
            />
        );
    }

    return (
        <Grid>
            <Restaurant data={restaurant} disableReview />
            {user == null && <SignInRequired />}
            {user != null && <ReviewForm restaurantId={id} />}
            <OtherReviews reviews={restaurant.reviews} />
        </Grid>
    );
};

export default ReviewRestaurant;
