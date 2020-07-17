import React from "react";

import { DigitText } from "@cthit/react-digit-components";
import Map from "@material-ui/icons/Map";
import { NonStyledALink } from "../../../../../common-ui/design";

const GoogleMapsLink = ({ address, mapsLink }) => (
    <>
        <Map />
        <NonStyledALink target={"_blank"} href={mapsLink}>
            <DigitText.Text text={address} />
        </NonStyledALink>
    </>
);

export default GoogleMapsLink;
