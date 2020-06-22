import React from "react";

import { DigitText } from "@cthit/react-digit-components";
import {
    FlexAlignCenter,
    Spacing
} from "../../../../../../../../common-ui/layout";
import { NonStyledALink } from "../../../../../../../../common-ui/design";
import Phone from "@material-ui/icons/Phone";

const PhoneNumber = ({ phoneNumber }) => (
    <FlexAlignCenter>
        <Phone />
        <Spacing />
        <NonStyledALink href={"tel:" + phoneNumber}>
            <DigitText.Text text={phoneNumber} />
        </NonStyledALink>
    </FlexAlignCenter>
);

export default PhoneNumber;
