import React from "react";

import { DigitText } from "@cthit/react-digit-components";
import { NonStyledALink } from "../../../../../../../../common-ui/design";
import Phone from "@material-ui/icons/Phone";

const PhoneNumber = ({ phoneNumber }) => (
    <>
        <Phone />
        <NonStyledALink href={"tel:" + phoneNumber}>
            <DigitText.Text text={phoneNumber} />
        </NonStyledALink>
    </>
);

export default PhoneNumber;
