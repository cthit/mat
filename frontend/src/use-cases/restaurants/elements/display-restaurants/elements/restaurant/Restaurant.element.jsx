import React, { useContext, useMemo } from "react";

import {
    DigitDesign,
    DigitButton,
    DigitLayout,
    DigitText
} from "@cthit/react-digit-components";
import { Margin, Spacing } from "../../../../../../common-ui/layout";
import { NonStyledALink } from "../../../../../../common-ui/design";
import OpenStatus from "./elements/open-status";
import PhoneNumber from "./elements/phone-number";
import GoogleMapsLink from "./elements/google-maps-link";
import OpeningHours from "./elements/opening-hours";
import FilterContext from "../../../filters/Filter.context";
import styled from "styled-components";
import useOpenStatus from "./hooks/use-open-status";

const RestaurantBody = styled.div`
    display: grid;

    grid-template-columns: 32px auto;
    grid-auto-rows: fit-content(32px);
    grid-row-gap: 0.5rem;
`;

const SpanWidth = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`;

const Restaurant = ({ data }) => {
    const {
        category_id,
        campus_location,
        name,
        phone_number,
        address,
        maps_link,
        openingHours,
        hidden
    } = data;

    const [filters] = useContext(FilterContext);
    const openStatus = useOpenStatus(openingHours);

    const acceptedByFilter = useMemo(() => {
        if (filters.campus !== campus_location) {
            return false;
        } else if (
            filters.categories.length > 0 &&
            !filters.categories.includes(category_id)
        ) {
            return false;
        } else if (filters.openNow && openStatus === "closed") {
            return false;
        }
        return true;
    }, [filters, openStatus, category_id, campus_location]);

    if (!acceptedByFilter || hidden) {
        return null;
    }

    return (
        <DigitDesign.Card>
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={name} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardBody>
                <RestaurantBody>
                    {openStatus !== "no-information" && (
                        <OpenStatus openStatus={openStatus} />
                    )}
                    {phone_number != null && (
                        <PhoneNumber phoneNumber={phone_number} />
                    )}
                    {maps_link != null && (
                        <GoogleMapsLink
                            address={address}
                            mapsLink={maps_link}
                        />
                    )}

                    <SpanWidth>
                        {openStatus === "no-information" && (
                            <DigitLayout.Center margin={{ top: "20px" }}>
                                <DigitText.Text bold text={"Inga öppetider"} />
                            </DigitLayout.Center>
                        )}

                        {openStatus !== "no-information" && (
                            <OpeningHours openingHours={openingHours} />
                        )}
                    </SpanWidth>
                </RestaurantBody>
            </DigitDesign.CardBody>
            <DigitDesign.CardButtons reverseDirection>
                <NonStyledALink target="_blank" href={data.menu}>
                    <DigitButton primary outlined text="Visa meny" />
                </NonStyledALink>
            </DigitDesign.CardButtons>
        </DigitDesign.Card>
    );
};

export default Restaurant;
