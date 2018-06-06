import React from "react";
import styled from "styled-components";

import { Text, Link } from "../../../common-ui/text";
import { Spacing } from "../../../common-ui/layout";

export const ContactInformation = ({
  openStatus, //open, closed
  openDisplayText, //Öppnar om, Öppet tills, Stängt
  phoneNumber,
  placeId, //Google unique place id
  formattedAdress
}) => (
  <div>
    <FlexCenterContainer>
      <Dot openStatus={openStatus} />
      <Spacing />
      <Text>{openDisplayText}</Text>
    </FlexCenterContainer>
    <Spacing />
    <FlexCenterContainer>
      <Image src="phone.png" />
      <Spacing />
      <Link href={"tel:" + phoneNumber}>{phoneNumber}</Link>
    </FlexCenterContainer>
    <Spacing />
    <FlexCenterContainer>
      <Image src="place.png" />
      <Spacing />
      <Link href={"https://www.google.com/maps/place/?q=place_id:" + placeId}>
        {formattedAdress}
      </Link>
    </FlexCenterContainer>
  </div>
);

const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${props => (props.open === "open" ? "#05c46b" : "#ff3f34")};
  border-radius: 50%;
  display: inline-block;
`;

const FlexCenterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px;
  padding: 0px;
`;
