import React from "react";

import { Icon } from "../../../../common-ui/image";
import { Link } from "../../../../common-ui/text";
import { Spacing, FlexAlignCenter } from "../../../../common-ui/layout";

export const PhoneNumber = ({ phoneNumber }) => (
  <FlexAlignCenter>
    <Icon src="phone.png" />
    <Spacing />
    <Link href={"tel:" + phoneNumber}>{phoneNumber}</Link>
  </FlexAlignCenter>
);
