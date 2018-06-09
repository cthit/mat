import React from "react";
import styled from "styled-components";

import { Icon } from "../../../common-ui/image";
import { Link } from "../../../common-ui/text";
import { Spacing, FlexCenter } from "../../../common-ui/layout";

export const PhoneNumber = ({ phoneNumber }) => (
  <FlexCenter>
    <Icon src="phone.png" />
    <Spacing />
    <Link href={"tel:" + phoneNumber}>{phoneNumber}</Link>
  </FlexCenter>
);
