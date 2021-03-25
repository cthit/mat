import React from "react";
import {
    DigitText,
    DigitCheckbox,
    DigitLayout,
    DigitTimePicker,
    useDigitTranslations
} from "@cthit/react-digit-components";

const EditWeekDay = ({ weekday, open, opens, closes }) => {
    const [text] = useDigitTranslations();

    return (
        <DigitLayout.Row alignItems={"center"} s>
            <div style={{ flex: "0.6" }}>
                <DigitText.Text bold text={text[weekday] + ":"} />
            </div>
            <DigitCheckbox {...open} flex={"1"} label={text.Open} primary />

            <DigitTimePicker
                {...opens}
                flex={"2"}
                outlined
                disabled={!open.value}
            />
            <DigitTimePicker
                {...closes}
                flex={"2"}
                outlined
                disabled={!open.value}
            />
        </DigitLayout.Row>
    );
};

export default EditWeekDay;
