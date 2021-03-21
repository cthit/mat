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
    justify-self: flex-start;

    @media (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 2;

        grid-row-start: 1;
        grid-row-end: 2;
    }
`;

const Container = styled.div`
    max-width: 400px;
    justify-self: center;

    @media (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 1;
        grid-row-end: 2;
    }
    display: grid;
    grid-auto-columns: max-content;
    grid-template-rows: min-content;
    grid-auto-flow: row;
    grid-gap: 1rem;

    background-color: #fff9c4;
    padding: 1rem;
    border-radius: 0.5rem;
`;

const Row = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
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

    const SortByText = (
        <DigitText.Text
            bold
            text={text.SortingBy + ": " + text[filters.sortBy]}
        />
    );

    if (!hasFilter) {
        return <ContainerNoFilter>{SortByText}</ContainerNoFilter>;
    }

    console.log(filters);

    console.log(activeLanguage);

    return (
        <Container>
            {SortByText}
            {filters.name !== "" && (
                <DigitText.Text text={"Name: " + filters.name} />
            )}
            {filters.categories.length > 0 && (
                <Row>
                    <DigitText.Text text={text.SortingCategories} />
                    {filters.categories.map(category => (
                        <DigitText.Text
                            key={category.id}
                            text={category["name_" + activeLanguage] + ","}
                        />
                    ))}
                </Row>
            )}
            <DigitButton
                onClick={() => dispatch({ type: RESET_FILTER })}
                secondary
                outlined
                text={text.ResetFilter}
            />
        </Container>
    );
};

export default ActiveFilters;
