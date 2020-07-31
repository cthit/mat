import React from "react";
import EditWeekDay from "./elements/edit-week-day";

const EditWeekDays = ({ innerInputs, value, ...props }) => {
    return innerInputs.map((weekdayInputs, i) => (
        <EditWeekDay key={i} weekday={value[i].weekday} {...weekdayInputs} />
    ));
};

export default EditWeekDays;
