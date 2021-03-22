import { useMemo } from "react";

const weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

const toDate = (distance, time, currentDate) => {
    var date = new Date();

    const timeParts = time.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    date.setDate(currentDate.getDate() + distance);

    date.setHours(hours);
    date.setMinutes(minutes);

    return date;
};

const toDates = (distance, opens, closes, currentDate) => {
    const opensHours = parseInt(opens.split(":")[0]);
    const closesHours = parseInt(closes.split(":")[0]);

    return [
        toDate(distance, opens, currentDate),
        toDate(
            closesHours < opensHours ? (distance + 1) % 7 : distance,
            closes,
            currentDate
        )
    ];
};

const possibleDays = (currentWeekday, a, b, c, currentDate) => {
    return [
        ...(a.opens == null
            ? [null, null]
            : toDates(-1, a.opens, a.closes, currentDate)),
        ...(b.opens == null
            ? [null, null]
            : toDates(0, b.opens, b.closes, currentDate)),
        ...(c.opens == null
            ? [null, null]
            : toDates(1, c.opens, c.closes, currentDate))
    ];
};

const calc = (openingHours, currentWeekday, currentDate) => {
    if (openingHours == null) {
        return null;
    }

    const index = currentWeekday;

    const previousDay = openingHours[(index - 1 + 7) % 7];
    const currentDay = openingHours[index];
    const nextDay = openingHours[(index + 1) % 7];

    const days = possibleDays(
        index,
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
    const currentWeekday = (currentDate.getDay() - 1 + 7) % 7; // wraps so that first day is monday not sunday

    //To debug opening hours:
    /*
        const currentTime = "21:00";
        const currentWeekday = 1; //"tuesday";

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
