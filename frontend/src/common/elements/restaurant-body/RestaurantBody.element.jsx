import React from "react";
import OpenStatus from "../restaurant/elements/open-status";
import PhoneNumber from "../restaurant/elements/phone-number";
import RestaurantRating from "../restaurant/elements/restaurant-rating";
import GoogleMapsLink from "../restaurant/elements/google-maps-link";
import { DigitLayout, DigitText } from "@cthit/react-digit-components";
import OpeningHours from "../restaurant/elements/opening-hours";
import styled from "styled-components";
import useCurrentWeekday from "../restaurant/hooks/use-current-weekday";

const SpanWidth = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`;

const Container = styled.div`
    display: grid;

    grid-template-columns: 32px auto;
    grid-auto-rows: fit-content(32px);
    grid-row-gap: 0.5rem;
`;

const RestaurantBody = ({ data }) => {
    const {
        phone_number,
        address,
        maps_link,
        openingHours,
        rating,
        openStatus
    } = data;

    const currentWeekday = useCurrentWeekday(openingHours);

    return (
        <Container>
            {openStatus !== "no-information" && (
                <OpenStatus openStatus={openStatus} />
            )}
            {phone_number != null && phone_number !== "" && (
                <PhoneNumber phoneNumber={phone_number} />
            )}
            {rating != null && <RestaurantRating rating={rating} />}
            {maps_link != null && maps_link !== "" && (
                <GoogleMapsLink address={address} mapsLink={maps_link} />
            )}

            <SpanWidth>
                {openStatus === "no-information" && (
                    <DigitLayout.Center margin={{ top: "20px" }}>
                        <DigitText.Text bold text={"Inga öppetider"} />
                    </DigitLayout.Center>
                )}

                {openStatus !== "no-information" && (
                    <OpeningHours
                        openingHours={openingHours}
                        currentWeekday={currentWeekday}
                    />
                )}
            </SpanWidth>
        </Container>
    );
};

export default RestaurantBody;
