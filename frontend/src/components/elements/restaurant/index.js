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

function _openingHoursMatches(openingHours, closingHours, openingHoursData){
    for(var i = 0; i < openingHoursData.length; i++){
        var openingHourData = openingHoursData[i];
        if(openingHourData.openingHours === openingHours &&
            openingHourData.closingHours === closingHours){
                return i;
            }
    }
    
    return -1;
}

function _renderOpeningHours(data){
    const openingHoursData = [];

    const name = data.name;

    const days = [];
    const openingHoursList = [];
    const closingHoursList = [];

    for(var i = 0; i < 7; i++){
        var weekday = data.opening_hours.weekday_text[i];
        
        const day = weekday.split(" ")[0].replace(":", "");
        const openingHours = weekday.split(" ")[1].split("–")[0];
        const closingHours = weekday.split(" ")[1].split("–")[1]
        
        //If empty, add and just move on
        if(openingHoursData.length === 0){
            openingHoursData.push({
                startDay: day,
                endDay: day,
                openingHours: openingHours,
                closingHours: closingHours
            });
            continue;
        }

        var openingHourData = openingHoursData[openingHoursData.length - 1];
        if(openingHours === openingHourData.openingHours &&
            closingHours === openingHourData.closingHours){
                openingHoursData[openingHoursData.length - 1].endDay = day;
        }else{
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

        const openingHoursUniqueKeyElement = startDay + name + "b";
        const openingHoursUniqueKeyText = startDay + name + "B";

        const closingHoursUniqueKeyElement = startDay + name + "c";
        const closingHoursUniqueKeyText = startDay + name + "C";

        if(startDay === endDay){
            days.push((
                <Element key={dayUniqueKeyElement}>
                    <Text key={dayUniqueKeyText}>{startDay}</Text>
                </Element>
            ));    
        }else{
            days.push((
                <Element key={dayUniqueKeyElement}>
                    <Text key={dayUniqueKeyText}>{startDay + " - " + endDay}</Text>
                </Element>
            ));    
        }

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

    /**
     *         
     */

    return (
        <Table>
            <Row>{days}</Row> 
            <Row>{openingHoursList}</Row>
            <Row>{closingHoursList}</Row> 
         </Table>
    )
}