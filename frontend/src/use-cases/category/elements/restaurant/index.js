import React from "react";
import {
  Container,
  Heading,
  Text,
  Row,
  Column,
  Cell,
  MapLink,
  ShowMenuButton,
  PhoneNumber,
  ButtonGroup,
  Divider,
  Dot,
  OpeningText,
  OpeningTimeContainer
} from "./styles";
//RATING
export const Restaurant = ({ data }) => (
  <Container restaurantOpenStatus={_getRestaurantOpenStatusColor(data)}>
    <Heading>{data.name}</Heading>
    <Divider />
    <OpeningTimeContainer>
      <Dot open={_getRestaurantOpenStatusColor(data)} />
      {_renderCurrentStatusRegardingRestaurantOpen(data)}
    </OpeningTimeContainer>
    <PhoneNumber href={"tel:" + data.formatted_phone_number}>
      {data.formatted_phone_number}
    </PhoneNumber>
    <MapLink
      href={"https://www.google.com/maps/place/?q=place_id:" + data.place_id}
    >
      {_getOnlyAddress(data.formatted_address)}
    </MapLink>
    <Divider />
    <Text>Öppetider:</Text>
    {_renderOpeningHours(data)}
    <ButtonGroup>
      <ShowMenuButton
        target="_blank"
        href={data.link_to_menu}
        appearance="primary"
      >
        Visa Meny
      </ShowMenuButton>
    </ButtonGroup>
  </Container>
);

function _getOnlyAddress(fullAddress) {
  return fullAddress.split(",")[0];
}

function _getRestaurantOpenStatusColor(data) {
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

function _renderCurrentStatusRegardingRestaurantOpen(data) {
  const now = new Date();
  const day = now.getDay();
  const openingHoursToday = data.opening_hours.periods[day];

  const currentTime = now.getHours() + "" + now.getMinutes();

  if (openingHoursToday == null) {
    return <OpeningText> Stängt </OpeningText>;
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
    return <OpeningText>Öppnar klockan {openingTime}</OpeningText>;
  } else if (currentTime > openingTime && currentTime < tempClosingTime) {
    closingTime = closingTime.substr(0, 2) + ":" + closingTime.substr(2, 2);
    return <OpeningText>Öppet tills {closingTime} </OpeningText>;
  } else {
    return <OpeningText> Stängt </OpeningText>;
  }
}

function _renderOpeningHours(data) {
  const openingHoursData = [];

  const name = data.name;

  const dayColumns = [];
  const timeColumns = [];

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

  openingHoursData.forEach(openingHourData => {
    //måndag; 11:00–21:00 -> {day}: {openingHours}-{closingHours}
    const startDay = openingHourData.startDay;
    const endDay = openingHourData.endDay;
    const openingHours = openingHourData.openingHours;
    const closingHours = openingHourData.closingHours;

    const dayUniqueKeyElement = startDay + name + "a";
    const dayUniqueKeyText = startDay + name + "A";

    const timeUniqueKeyElement = startDay + name + "b";
    const timeUniqueKeyText = startDay + name + "B";

    var daysInfo = "";
    var hoursInfo = "";

    if (closingHours == null) {
      if (startDay !== endDay) {
        daysInfo = startDay + " - " + endDay;
      } else {
        daysInfo = startDay;
      }
      hoursInfo = openingHours; //openingHours will be "Stängt"
    } else if (startDay === endDay) {
      daysInfo = startDay;
      hoursInfo = openingHours + " - " + closingHours;
    } else {
      daysInfo = startDay + " - " + endDay;
      hoursInfo = openingHours + " - " + closingHours;
    }

    dayColumns.push(
      <Cell key={dayUniqueKeyElement}>
        <Text key={dayUniqueKeyText}>{daysInfo + ":"}</Text>
      </Cell>
    );

    timeColumns.push(
      <Cell key={timeUniqueKeyElement}>
        <Text key={timeUniqueKeyText}>{hoursInfo}</Text>
      </Cell>
    );
  });

  return (
    <Row>
      <Column align="right">{dayColumns}</Column>
      <Column align="left">{timeColumns}</Column>
    </Row>
  );
}
