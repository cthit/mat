import React from 'react';
import { Container, Heading, Text, Table, Row, ShowMenuButton, ShowMapButton, Bold, PhoneNumber, ButtonGroup } from './styles';
//RATING
export const Restaurant = ({data}) => 
    <Container restaurantOpenStatus={_getRestaurantOpenStatusColor(data)}> 
        <Heading>{ data.name }</Heading>
        <PhoneNumber href={"tel:" + data.formatted_phone_number}>{ data.formatted_phone_number }</PhoneNumber>
        {_renderCurrentStatusRegardingRestaurantOpen(data)}
        {_renderOpeningHours(data)}
        <ButtonGroup>
            <ShowMenuButton target="_blank"  href={ data.link_to_menu } appearance="primary">Visa meny för {data.name}</ShowMenuButton>
            <ShowMapButton>Visa karta</ShowMapButton>
        </ButtonGroup>
     </Container>

function _getRestaurantOpenStatusColor(data){
    const now = new Date();
    const day = now.getDay();
    const openingHoursToday = data.opening_hours.periods[day];
    const currentTime = now.getHours() + "" + now.getMinutes();

    var openingTime = openingHoursToday.open.time;
    var closingTime = openingHoursToday.close.time;

    var tempClosingTime = closingTime < openingTime 
        ? (parseInt(closingTime.split(":")[0], 10) + 24) + ":" + closingTime.split(":")[1] 
        : closingTime; //Because 15:00 > 00.00

    if(currentTime > openingTime && currentTime < tempClosingTime){
        return 'open'
    }else{
        return 'closed';
    }
}

function _renderCurrentStatusRegardingRestaurantOpen(data){
    const now = new Date();
    const day = now.getDay();
    const openingHoursToday = data.opening_hours.periods[day];
    
    const currentTime = now.getHours() + "" + now.getMinutes();

    var openingTime = openingHoursToday.open.time;
    var closingTime = openingHoursToday.close.time;

    var tempClosingTime = closingTime < openingTime 
        ? (parseInt(closingTime.split(":")[0], 10) + 24) + ":" + closingTime.split(":")[1] 
        : closingTime; //Because 15:00 > 00.00

    if(currentTime < openingTime){
        openingTime = openingTime.substr(0, 2) + ":" + openingTime.substr(2, 2);
        return (
            <Text><Bold>Öppnar</Bold> klockan <Bold>{ openingTime }</Bold></Text>
        )
    }else if(currentTime > openingTime && currentTime < tempClosingTime){
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
    const openingHoursData = [];

    const name = data.name;

    const rows = [];

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

        var daysInfo = "";
        var hoursInfo = "";
        
        if(closingHours == null){
            daysInfo = startDay;
            hoursInfo = openingHours; //openingHours will be "Stängt"
        } else if(startDay === endDay){
            daysInfo = startDay;
            hoursInfo = openingHours + " - " + closingHours;
        } else{
            daysInfo = startDay + " - " + endDay;
            hoursInfo = openingHours + " - " + closingHours;
        }

        rows.push((
            <Row key={dayUniqueKeyElement}>
                <Text key={dayUniqueKeyText}>{daysInfo + ": " + hoursInfo}</Text>
            </Row>
        ));    

    });

    return (
        <Table>
            { rows }
         </Table>
    )
}