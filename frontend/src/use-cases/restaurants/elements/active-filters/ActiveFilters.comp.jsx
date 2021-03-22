import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
    DigitButton,
    DigitText,
    useDigitTranslations
} from "@cthit/react-digit-components";
import FilterContext, {
    defaultValue,
    RESET_FILTER
} from "../filters/Filter.context";

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
    border-radius: 0.5rem;
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

let defaultValueWithoutCampus = JSON.parse(JSON.stringify(defaultValue));
delete defaultValueWithoutCampus.campus;
defaultValueWithoutCampus = JSON.stringify(defaultValueWithoutCampus);

const ActiveFilters = () => {
    const [text, activeLanguage] = useDigitTranslations();
    const [filters, dispatch] = useContext(FilterContext);
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

    console.log(filters);

    console.log(activeLanguage);

    return (
        <Container>
            {DefaultText}
            {filters.name !== "" && (
                <DigitText.Text text={"Name: " + filters.name} />
            )}
            {filters.categories.length > 0 && (
                <Row>
                    <Text>+</Text>
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
                secondary
                outlined
                text={text.ResetFilter}
                justifySelf={"flex-end"}
            />
        </Container>
    );
};

export default ActiveFilters;
