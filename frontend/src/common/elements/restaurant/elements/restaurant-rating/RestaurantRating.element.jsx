import React from "react";
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";
import MatRating from "../../../mat-rating";

const RestaurantRating = ({ rating }) => (
    <>
        <ThumbsUpDown />
        <MatRating value={rating} readOnly />
    </>
);
export default RestaurantRating;
