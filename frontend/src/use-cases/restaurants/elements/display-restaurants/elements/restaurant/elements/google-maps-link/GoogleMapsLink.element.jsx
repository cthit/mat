import React from "react";

import { DigitText } from "@cthit/react-digit-components";
import { Icon } from "../../../../../../../../common-ui/image";
import {
    FlexAlignCenter,
    Spacing
} from "../../../../../../../../common-ui/layout";
import { NonStyledALink } from "../../../../../../../../common-ui/design";
import Map from "@material-ui/icons/Map";

const GoogleMapsLink = ({ address, mapsLink }) => (
    <FlexAlignCenter>
        <Map />
        <Spacing />
        <NonStyledALink href={mapsLink}>
            <DigitText.Text text={address} />
        </NonStyledALink>
    </FlexAlignCenter>
);

export default GoogleMapsLink;
