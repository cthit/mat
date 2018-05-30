import React from "react";
import styled from "styled-components";

import { Text, Link } from "../../../common-ui/text";

export const ContactInformation = ({
  openStatus, //open, closed
  openDisplayText, //Öppnar om, Öppet tills, Stängt
  phoneNumber,
  placeId, //Google unique place id
  formattedAdress
}) => (
  <div>
    <OpeningTimeContainer>
      <Dot openStatus={openStatus} />
      <Text>{openDisplayText}</Text>
    </OpeningTimeContainer>
    <Link href={"tel:" + phoneNumber}>{phoneNumber}</Link>
    <Link href={"https://www.google.com/maps/place/?q=place_id:" + placeId}>
      {formattedAdress}
    </Link>
  </div>
);

const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${props => (props.open === "open" ? "#05c46b" : "#ff3f34")};
  border-radius: 50%;
  display: inline-block;
`;

const OpeningTimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
