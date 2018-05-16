import React from 'react';
import { Container, Heading, Text, Table, TableData, Row, Element, ShowMenuButton, ShowMapButton, Bold, PhoneNumber, ButtonGroup } from './styles';
//RATING
export const Restaurant = ({data}) => 
    <Container> 
        <Heading>{ data.name }</Heading>
        <PhoneNumber href={"tel:" + data.formatted_phone_number}>{ data.formatted_phone_number }</PhoneNumber>
        {_renderCurrentStatusRegardingRestaurantOpen(data)}
        {_renderOpeningHours(data)}
        <ButtonGroup>
            <ShowMenuButton target="_blank"  href={ data.link_to_menu } appearance="primary">Visa meny för {data.name}</ShowMenuButton>
        </ButtonGroup>
     </Container>
//    <ShowMapButton>Visa karta</ShowMapButton>
function _renderCurrentStatusRegardingRestaurantOpen(data){
    const now = new Date();
    const day = now.getDay();
    const openingHoursToday = data.opening_hours.periods[day];
    
    const currentTime = now.getHours() + "" + now.getMinutes();

    var openingTime = openingHoursToday.open.time;
    var closingTime = openingHoursToday.close.time;

    if(currentTime < openingTime){
        openingTime = openingTime.substr(0, 2) + ":" + openingTime.substr(2, 2);
        return (
            <Text><Bold>Öppnar</Bold> klockan <Bold>{ openingTime }</Bold></Text>
        )
    }else if(currentTime > openingTime && currentTime < closingTime){
        closingTime = closingTime.substr(0, 2) + ":" + closingTime.substr(2, 2);
        return (
            <Text><Bold>Öppet</Bold> tills { closingTime } </Text>
        )
    }else{
        return (
            <Text> <Bold>Stängt</Bold> </Text>
        )
    }
}

function _renderOpeningHours(data){
    const name = data.name;

    const days = [];
    const openingHoursList = [];
    const closingHoursList = [];

    data.opening_hours.weekday_text.forEach(weekday => {
        //måndag; 11:00–21:00 -> {day}: {openingHours}-{closingHours}
        const day = weekday.split(" ")[0].replace(":", "");
        const openingHours = weekday.split(" ")[1].split("–")[0];
        const closingHours = weekday.split(" ")[1].split("–")[1]
    
        const dayUniqueKeyElement = day + name + "a";
        const dayUniqueKeyText = day + name + "A";

        const openingHoursUniqueKeyElement = day + name + "b";
        const openingHoursUniqueKeyText = day + name + "B";

        const closingHoursUniqueKeyElement = day + name + "c";
        const closingHoursUniqueKeyText = day + name + "C";

        days.push((
            <Element key={dayUniqueKeyElement}>
                <Text key={dayUniqueKeyText}>{day}</Text>
            </Element>
        ));

        openingHoursList.push((
            <Element key={openingHoursUniqueKeyElement}>
                <Text key={openingHoursUniqueKeyText}>{openingHours}</Text>
            </Element>
        ));

        closingHoursList.push((
            <Element key={closingHoursUniqueKeyElement}>
                <Text key={closingHoursUniqueKeyText}>{closingHours}</Text>
            </Element>
        ));
    });

    return (
        <Table>
            <Row>{days}</Row> 
            <Row>{openingHoursList}</Row>
            <Row>{closingHoursList}</Row> 
         </Table>
    )
}