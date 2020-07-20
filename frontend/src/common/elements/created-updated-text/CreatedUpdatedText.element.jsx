import React, { useMemo } from "react";
import { useDigitTranslations, DigitText } from "@cthit/react-digit-components";

function formatDate(date, text) {
    if (date == null) {
        return null;
    }

    date = new Date(date);
    return date.toLocaleDateString("sv", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
}

const CreatedUpdatedText = ({ updatedAt, createdAt }) => {
    const [text] = useDigitTranslations();

    const updatedAtFormatted = useMemo(
        () =>
            updatedAt == null || updatedAt === createdAt
                ? null
                : formatDate(updatedAt, text),
        [updatedAt, createdAt]
    );

    const createdAtFormatted = useMemo(
        () => (createdAt == null ? null : formatDate(createdAt, text)),
        [createdAt]
    );

    var all = "";

    if (updatedAtFormatted != null && createdAtFormatted != null) {
        all =
            createdAtFormatted +
            " (" +
            text.Updated +
            " " +
            updatedAtFormatted +
            ")";
    } else if (createdAtFormatted != null) {
        all = createdAtFormatted;
    }

    return <DigitText.Text text={all} />;
};

export default CreatedUpdatedText;
