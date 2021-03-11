import React, { useCallback, useEffect, useState } from "react";
import { getRestaurant } from "../../api/restaurants/get.restaurants.api";
import {
    DigitLoading,
    useGammaMe,
    useGammaStatus,
    DigitButton,
    useDigitTranslations,
    useDigitToast
} from "@cthit/react-digit-components";
import styled from "styled-components";
import Restaurant from "../../common/elements/restaurant";
import ReviewForm from "./views/review-form";
import OtherReviews from "./elements/other-reviews";
import find from "lodash/find";
import SignInRequired from "./elements/sign-in-required";
import { setReview } from "../../api/restaurants/post.restaurants.api";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import FourZeroFour from "../../common/elements/fourzerofour";
import FiveZeroZero from "../../common/elements/fivezerozero";

const Grid = styled.div`
    align-self: flex-start;

    display: grid;
    grid-template-columns: 350px 350px;
    grid-auto-rows: min-content;
    grid-gap: 1rem;

    @media (max-width: 767px) {
        grid-template-columns: auto;
    }

    flex: 1;
    justify-content: center;
    align-content: center;
`;

const RestaurantsLink = styled(Link)`
    grid-column-start: 1;
    grid-column-end: -1;
    text-decoration: none;
    color: inherit;
`;

const NO_REVIEW = "no-review";

const ReviewRestaurant = ({ match }) => {
    const { id } = match.params;
    const user = useGammaMe();
    const [loading] = useGammaStatus();
    const userId = user == null ? null : user.id;
    const [text] = useDigitTranslations();
    const [queueToast] = useDigitToast();

    const [status, setStatus] = useState(null);
    const [restaurant, setRestaurant] = useState(null);
    const [userReview, setUserReview] = useState(null);

    const _getRestaurant = useCallback(() => {
        getRestaurant(id)
            .then(response => {
                setRestaurant(response.data);
            })
            .catch(error => {
                setStatus(error.response.status);
            });
    }, [id]);

    useEffect(() => {
        _getRestaurant();
    }, [_getRestaurant]);

    useEffect(() => {
        if (restaurant != null && !loading && userId != null) {
            var userReview = find(
                restaurant.reviews,
                review => review.reviewer.uid === userId
            );
            userReview = userReview == null ? NO_REVIEW : userReview;

            setUserReview(userReview);
        } else {
            setUserReview(null);
        }
    }, [restaurant, userId, loading]);

    if (restaurant == null && status == null) {
        return (
            <DigitLoading
                margin={{ left: "auto", right: "auto", top: "32px" }}
                loading
            />
        );
    }

    if (!restaurant && (status === 404 || status === 400)) {
        return <FourZeroFour />;
    }

    if (!restaurant && status) {
        return <FiveZeroZero />;
    }

    return (
        <Grid>
            <RestaurantsLink to={"/"}>
                <DigitButton
                    outlined
                    justifySelf={"flex-start"}
                    startIcon={<ArrowBack />}
                    text={text.BackToRestaurants}
                />
            </RestaurantsLink>
            {restaurant && <Restaurant data={restaurant} disableReview />}
            {user == null && !loading && <SignInRequired />}
            {user != null && (
                <ReviewForm
                    restaurantId={restaurant.id}
                    updateRestaurant={_getRestaurant}
                    loading={loading || userReview == null}
                    userReview={userReview}
                    onSubmit={values => {
                        setReview({
                            ...values,
                            restaurant_id: id
                        }).then(response => {
                            _getRestaurant();
                            queueToast({
                                text: text.ReviewSaved
                            });
                        });
                    }}
                />
            )}
            {restaurant && (
                <OtherReviews
                    reviews={restaurant.reviews}
                    restaurantId={restaurant.id}
                    updateRestaurant={_getRestaurant}
                />
            )}
        </Grid>
    );
};

export { NO_REVIEW };
export default ReviewRestaurant;
