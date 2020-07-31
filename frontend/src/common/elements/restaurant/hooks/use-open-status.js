import { useMemo } from "react";

const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];

const toDate = (weekday, time, currentDate) => {
    var date = new Date();

    const timeParts = time.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    var currentDay = currentDate.getDay();
    var distance = weekday - currentDay;
    date.setDate(currentDate.getDate() + distance);

    date.setHours(hours);
    date.setMinutes(minutes);

    return date;
};

const toDates = (weekday, opens, closes, currentDate) => {
    const opensHours = parseInt(opens.split(":")[0]);
    const closesHours = parseInt(closes.split(":")[0]);

    return [
        toDate(weekday, opens, currentDate),
        toDate(
            closesHours < opensHours ? (weekday + 1) % 7 : weekday,
            closes,
            currentDate
        )
    ];
};

const possibleDays = (currentWeekday, a, b, c, currentDate) => {
    const previousWeekday =
        currentWeekday > 0 ? currentWeekday - 1 : currentWeekday;
    const nextWeekday = (currentWeekday + 1) % 7;

    return [
        ...(a.opens == null
            ? [null, null]
            : toDates(previousWeekday, a.opens, a.closes, currentDate)),
        ...(b.opens == null
            ? [null, null]
            : toDates(currentWeekday, b.opens, b.closes, currentDate)),
        ...(c.opens == null
            ? [null, null]
            : toDates(nextWeekday, c.opens, c.closes, currentDate))
    ];
};

const calc = (openingHours, currentWeekday, currentDate) => {
    if (openingHours == null) {
        return null;
    }

    //const index = (findIndex(openingHours, ["weekday", currentWeekday]) + 1) % 7;
    const index = currentWeekday;

    const previousDay = openingHours[index === 0 ? 6 : index - 1];
    const currentDay = openingHours[index];
    const nextDay = openingHours[(index + 1) % 7];

    // + 1 % 7 is to make it into sunday = 0, monday = 1 etc
    const days = possibleDays(
        index, // + (1 % 7),
        previousDay,
        currentDay,
        nextDay,
        currentDate
    );

    var periodIndex = -1;

    for (var i = 0; i < days.length - 1; i++) {
        if (days[i] == null) {
            continue;
        }

        if (currentDate >= days[i] && currentDate <= days[i + 1]) {
            periodIndex = i;
            break;
        }
    }

    return periodIndex === -1
        ? "closed"
        : periodIndex % 2 === 0
        ? Math.abs(days[periodIndex + 1] - currentDate) / 36e5 < 1
            ? "closing-soon"
            : "open"
        : "closed";
};

function useOpenStatus(openingHours) {
    const currentDate = new Date();
    const currentWeekday = currentDate.getDay();

    //To debug opening hours:
    /*
        const currentTime = "21:00";
        const currentWeekday = 2; //"tuesday";

        var currentDay = currentDate.getDay();
        var distance = currentWeekday - currentDay;
        currentDate.setDate(currentDate.getDate() + distance);
        currentDate.setHours(parseInt(currentTime.split(":")[0]));
        currentDate.setMinutes(parseInt(currentTime.split(":")[1]));
    */

    const hasOpeningHours = useMemo(() => {
        if (openingHours == null) {
            return false;
        }

        var open = false;
        for (var oh of openingHours) {
            if (oh.opens != null) {
                open = true;
                break;
            }
        }
        return open;
    }, [openingHours]);

    const status = useMemo(
        () => calc(openingHours, currentWeekday, currentDate),
        [openingHours, currentWeekday, currentDate]
    );

    return [
        !hasOpeningHours ? "no-information" : status,
        weekdays[currentWeekday]
    ];
}

export default useOpenStatus;
