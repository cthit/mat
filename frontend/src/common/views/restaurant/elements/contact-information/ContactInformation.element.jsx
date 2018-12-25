import React from "react";
import styled from "styled-components";

import { Spacing } from "../../../../../common-ui/layout";
import OpenStatus from "../open-status";
import PhoneNumber from "../phone-number";
import GoogleMapsLink from "../google-maps-link";

const ContactInformation = ({
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

const Container = styled.div`
    margin-left: 8px;
`;

export default ContactInformation;
