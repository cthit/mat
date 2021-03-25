const weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

function useCurrentWeekday() {
    const currentDate = new Date();
    const currentWeekday = (currentDate.getDay() - 1 + 7) % 7; // wraps so that first day is monday not sunday

    return weekdays[currentWeekday];
}

export default useCurrentWeekday;
