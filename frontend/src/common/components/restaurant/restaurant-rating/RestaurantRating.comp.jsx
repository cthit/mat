import React from "react";
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";
import { DigitRating } from "@cthit/react-digit-components";

const RestaurantRating = ({ rating }) => (
    <>
        <ThumbsUpDown />
        <DigitRating precision={0.1} value={rating} readOnly />
    </>
);
export default RestaurantRating;
