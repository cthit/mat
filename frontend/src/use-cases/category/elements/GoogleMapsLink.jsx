import React from "react";
import styled from "styled-components";

import { Icon } from "../../../common-ui/image";
import { Link } from "../../../common-ui/text";
import { Spacing, FlexCenter } from "../../../common-ui/layout";

export const GoogleMapsLink = ({ formattedAddress, placeId }) => (
  <FlexCenter>
    <Icon src="place.png" />
    <Spacing />
    <Link href={"https://www.google.com/maps/place/?q=place_id:" + placeId}>
      {formattedAddress}
    </Link>
  </FlexCenter>
);
