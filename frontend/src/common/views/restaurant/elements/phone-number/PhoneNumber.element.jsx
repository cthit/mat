import React from "react";

import { Icon } from "../../../../../common-ui/image";
import { Link } from "../../../../../common-ui/text";
import { Spacing, FlexAlignCenter } from "../../../../../common-ui/layout";
import { DigitText } from "@cthit/react-digit-components";
import { NonStyledALink } from "../../../../../common-ui/design";

const PhoneNumber = ({ phoneNumber }) => (
    <FlexAlignCenter>
        <Icon src="phone.png" />
        <Spacing />
        <NonStyledALink href={"tel:" + phoneNumber}>
            <DigitText.Text text={phoneNumber} />
        </NonStyledALink>
    </FlexAlignCenter>
);

export default PhoneNumber;
