import React from "react";
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";
import { DigitRating } from "@cthit/react-digit-components";

const RestaurantRating = ({ rating }) => (
    <>
        <ThumbsUpDown />
        <DigitRating value={rating} readOnly />
    </>
);
export default RestaurantRating;
