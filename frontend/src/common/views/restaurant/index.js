import React from "react";

import { MaterialBody, MaterialButtons, RestaurantMaterial } from "./styles";

import { OpeningHours } from "./elements/OpeningHours";
import { ContactInformation } from "./elements/ContactInformation";
import { RestaurantButtons } from "./elements/RestaurantButtons";
import { Padding, Spacing } from "../../../common-ui/layout";
import { HeadingLevel2 } from "../../../common-ui/text";

export const Restaurant = ({ data }) => (
  <RestaurantMaterial
    width="300px"
    height="300px"
    maxWidth="300px"
    maxHeight="300px"
    minWidth="300px"
    minHeight="300px"
  >
    <Padding>
      <MaterialBody>
        <HeadingLevel2>{data.name}</HeadingLevel2>
        <Spacing />
        <ContactInformation
          openStatus={_getOpenStatus(data)}
          openDisplayText={_getOpenDisplayText(data)}
          phoneNumber={data.formatted_phone_number}
          placeId={data.place_id}
          formattedAddress={_getOnlyAddress(data.formatted_address)}
        />
        <Spacing />
        <OpeningHours openingHours={_getOpeningHoursData(data)} />
      </MaterialBody>
      <MaterialButtons>
        <RestaurantButtons linkToMenu={data.link_to_menu} />
      </MaterialButtons>
    </Padding>
  </RestaurantMaterial>
);

function _getOnlyAddress(fullAddress) {
  return fullAddress.split(",")[0];
}

function _getOpenStatus(data) {
  const now = new Date();
  const day = now.getDay();
  const openingHoursToday = data.opening_hours.periods[day];
  const currentTime = now.getHours() + "" + now.getMinutes();

  if (openingHoursToday == null) {
    return "closed";
  }

  var openingTime = openingHoursToday.open.time;
  var closingTime = openingHoursToday.close.time;

  var tempClosingTime =
    closingTime < openingTime
      ? parseInt(closingTime.split(":")[0], 10) +
        24 +
        ":" +
        closingTime.split(":")[1]
      : closingTime; //Because 15:00 > 00.00

  if (currentTime > openingTime && currentTime < tempClosingTime) {
    return "open";
  } else {
    return "closed";
  }
}

function _getOpenDisplayText(data) {
  const now = new Date();
  const day = now.getDay();
  const openingHoursToday = data.opening_hours.periods[day];

  const currentTime = now.getHours() + "" + now.getMinutes();

  if (openingHoursToday == null) {
    return "Stängt";
  }

  var openingTime = openingHoursToday.open.time;
  var closingTime = openingHoursToday.close.time;

  var tempClosingTime =
    closingTime < openingTime
      ? parseInt(closingTime.split(":")[0], 10) +
        24 +
        ":" +
        closingTime.split(":")[1]
      : closingTime; //Because 15:00 > 00.00

  if (currentTime < openingTime) {
    openingTime = openingTime.substr(0, 2) + ":" + openingTime.substr(2, 2);
    return "Öppnar klockan " + openingTime;
  } else if (currentTime > openingTime && currentTime < tempClosingTime) {
    closingTime = closingTime.substr(0, 2) + ":" + closingTime.substr(2, 2);
    return "Öppet tills " + closingTime;
  } else {
    return "Stängt";
  }
}

function _getOpeningHoursData(data) {
  const openingHoursData = [];

  for (var i = 0; i < 7; i++) {
    var weekday = data.opening_hours.weekday_text[i];

    const day = weekday.split(" ")[0].replace(":", "");
    const openingHours = weekday.split(" ")[1].split("–")[0];
    const closingHours = weekday.split(" ")[1].split("–")[1];

    //If empty, add and just move on
    if (openingHoursData.length === 0) {
      openingHoursData.push({
        startDay: day,
        endDay: day,
        openingHours: openingHours,
        closingHours: closingHours
      });
      continue;
    }

    var openingHourData = openingHoursData[openingHoursData.length - 1];
    if (
      openingHours === openingHourData.openingHours &&
      closingHours === openingHourData.closingHours
    ) {
      openingHoursData[openingHoursData.length - 1].endDay = day;
    } else {
      openingHoursData.push({
        startDay: day,
        endDay: day,
        openingHours: openingHours,
        closingHours: closingHours
      });
    }
  }
  return openingHoursData;
}
