import React from "react";

import { Icon } from "../../../../common-ui/image";
import { Link } from "../../../../common-ui/text";
import { Spacing, FlexAlignCenter } from "../../../../common-ui/layout";

export const GoogleMapsLink = ({ formattedAddress, placeId }) => (
    <FlexAlignCenter>
        <Icon src="place.png" />
        <Spacing />
        <Link href={"https://www.google.com/maps/place/?q=place_id:" + placeId}>
            {formattedAddress}
        </Link>
    </FlexAlignCenter>
);
