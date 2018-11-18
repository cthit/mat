import React from "react";
import styled from "styled-components";

import { OpenStatus } from "./OpenStatus";
import { PhoneNumber } from "./PhoneNumber";
import { GoogleMapsLink } from "./GoogleMapsLink";
import { Spacing } from "../../../../common-ui/layout";

export const ContactInformation = ({
    openStatus, //open, closed, unknown
    openDisplayText, //Öppnar om, Öppet tills, Stängt
    phoneNumber,
    placeId, //Google unique place id
    formattedAddress
}) => (
    <Container>
        <OpenStatus status={openStatus} openDisplayText={openDisplayText} />
        <Spacing />
        <PhoneNumber phoneNumber={phoneNumber} />
        <Spacing />
        <GoogleMapsLink formattedAddress={formattedAddress} placeId={placeId} />
    </Container>
);

const Container = styled.div``;
