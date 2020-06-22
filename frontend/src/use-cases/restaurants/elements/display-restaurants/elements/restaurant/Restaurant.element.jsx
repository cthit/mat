import React, { useMemo } from "react";

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

const Restaurant = ({ data }) => {
    const {
        name,
        phone_number,
        address,
        maps_link,
        openingHours,
        hidden
    } = data;

    const hasOpeningHours = useMemo(() => {
        var open = false;
        for (var oh of openingHours) {
            if (oh.opens != null) {
                open = true;
                break;
            }
        }
        return open;
    }, [openingHours]);

    if (hidden) {
        return null;
    }

    return (
        <DigitDesign.Card
            size={{
                maxWidth: "calc(320px - 32px)",
                maxHeight: "fit-content"
            }}
        >
            <DigitDesign.CardHeader>
                <DigitDesign.CardTitle text={name} />
            </DigitDesign.CardHeader>
            <DigitDesign.CardBody>
                <Margin>
                    <DigitLayout.Column fillElement>
                        {hasOpeningHours && (
                            <OpenStatus openingHours={openingHours} />
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

                        {!hasOpeningHours && (
                            <DigitLayout.Center margin={{ top: "20px" }}>
                                <DigitText.Text bold text={"Inga öppetider"} />
                            </DigitLayout.Center>
                        )}

                        {hasOpeningHours && (
                            <OpeningHours openingHours={openingHours} />
                        )}
                    </DigitLayout.Column>
                </Margin>
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
