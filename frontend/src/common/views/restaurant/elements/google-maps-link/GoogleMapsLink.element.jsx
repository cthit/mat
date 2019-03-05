import React from "react";

import { Icon } from "../../../../../common-ui/image";
import { Link } from "../../../../../common-ui/text";
import { Spacing, FlexAlignCenter } from "../../../../../common-ui/layout";
import { NonStyledALink } from "../../../../../common-ui/design";
import { DigitText } from "@cthit/react-digit-components";

const GoogleMapsLink = ({ formattedAddress, placeId }) => (
    <FlexAlignCenter>
        <Icon src="place.png" />
        <Spacing />
        <NonStyledALink
            href={"https://www.google.com/maps/place/?q=place_id:" + placeId}
        >
            <DigitText.Text text={formattedAddress} />
        </NonStyledALink>
    </FlexAlignCenter>
);

export default GoogleMapsLink;
