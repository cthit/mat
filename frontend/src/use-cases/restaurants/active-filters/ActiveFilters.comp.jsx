import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
    DigitButton,
    DigitText,
    useDigitTranslations
} from "@cthit/react-digit-components";
import FilterCompContext, {
    defaultValue,
    RESET_FILTER
} from "../filters/Filter.comp.context";

const ContainerNoFilter = styled.div`
    justify-self: center;
    @media (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 1;
        grid-row-end: 2;
    }
`;

const Container = styled.div`
    box-sizing: border-box;

    width: 100%;
    max-width: 400px;

    justify-self: center;

    @media (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 1;
        grid-row-end: 2;
    }
    display: grid;
    grid-auto-columns: auto;
    grid-template-rows: min-content;
    grid-auto-flow: row;
    grid-gap: 1rem;

    background-color: #fff9c4;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Row = styled.div`
    max-width: 350px;
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Text = styled.p`
    font-family: Roboto, serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    padding-left: 8px;
    margin: 0;
    letter-spacing: 0.00938em;
`;

const TextNoPadding = styled(Text)`
    padding-left: 0;
`;

let defaultValueWithoutCampus = JSON.parse(JSON.stringify(defaultValue));
delete defaultValueWithoutCampus.campus;
defaultValueWithoutCampus = JSON.stringify(defaultValueWithoutCampus);

const ActiveFilters = () => {
    const [text, activeLanguage] = useDigitTranslations();
    const [filters, dispatch] = useContext(FilterCompContext);
    const [hasFilter, setHasFilter] = useState(false);
    useEffect(() => {
        const copy = JSON.parse(JSON.stringify(filters));
        delete copy.campus;
        setHasFilter(JSON.stringify(copy) !== defaultValueWithoutCampus);
    }, [filters]);

    const DefaultText = (
        <DigitText.Text
            bold
            text={
                text[filters.campus] +
                " - " +
                text.SortingBy +
                ": " +
                text[filters.sortBy]
            }
        />
    );

    if (!hasFilter) {
        return <ContainerNoFilter>{DefaultText}</ContainerNoFilter>;
    }

    return (
        <Container>
            {DefaultText}
            {filters.name !== "" && (
                <DigitText.Text text={text.Name + ": " + filters.name} />
            )}
            {filters.openNow && (
                <DigitText.Text text={"+ " + text.OpenRightNow} />
            )}
            {filters.categories.length > 0 && (
                <Row>
                    <TextNoPadding>+</TextNoPadding>
                    {filters.categories.map((category, i) => (
                        <Text key={category.id}>
                            {category["name_" + activeLanguage] +
                                (i !== filters.categories.length - 1
                                    ? ","
                                    : "")}
                        </Text>
                    ))}
                </Row>
            )}
            <DigitButton
                onClick={() => dispatch({ type: RESET_FILTER })}
                outlined
                text={text.ResetFilter}
                justifySelf={"flex-end"}
            />
        </Container>
    );
};

export default ActiveFilters;
