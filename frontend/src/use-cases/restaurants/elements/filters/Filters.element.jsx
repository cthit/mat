import React, { useContext } from "react";
import styled from "styled-components";
import {
    DigitCheckbox,
    DigitDesign,
    DigitRadioButtonGroup,
    DigitSelect,
    DigitText,
    DigitTextField,
    useDigitTranslations
} from "@cthit/react-digit-components";
import FilterContext, {
    UPDATE_CAMPUS,
    UPDATE_CATEGORY,
    UPDATE_NAME,
    UPDATE_SORT_BY
} from "./Filter.context";
import RestaurantsContext from "../../Restaurants.context";

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

/*
    {
        campus: null | "johanneberg" | "lindholmen",
        category: ["..."],
        sortBy: "highestRating" | "lowestRating" | "A-Ö" | "Ö-A",
        name: "..."
    }
 */

const Filters = () => {
    const [text] = useDigitTranslations();
    const [state, dispatch] = useContext(FilterContext);
    const { categories } = useContext(RestaurantsContext);
    const [, activeLanguage] = useDigitTranslations();

    return (
        <Column>
            <DigitText.Title text={text.Filter} />
            <DigitTextField
                upperLabel={text.RestaurantName}
                flex={"1"}
                size={{ width: "auto" }}
                onChange={e =>
                    dispatch({
                        type: UPDATE_NAME,
                        name: e.target.value
                    })
                }
                value={state.name}
                outlined
            />
            <DigitDesign.Divider />
            <DigitRadioButtonGroup
                padding={{ left: "6px" }}
                onChange={e =>
                    dispatch({
                        type: UPDATE_CAMPUS,
                        value: e.target.value
                    })
                }
                value={state.campus}
                radioButtons={[
                    {
                        id: "johanneberg",
                        label: "Johanneberg",
                        primary: true
                    },
                    {
                        id: "lindholmen",
                        label: "Lindholmen",
                        primary: true
                    }
                ]}
            />
            <DigitDesign.Divider />
            {categories.map(category => (
                <DigitCheckbox
                    key={category.id}
                    size={{ width: "max-content" }}
                    primary
                    onChange={e =>
                        dispatch({
                            type: UPDATE_CATEGORY,
                            category: category.id
                        })
                    }
                    value={state.categories.includes(category.id)}
                    label={category["name_" + activeLanguage]}
                />
            ))}
            <DigitDesign.Divider />
            <DigitSelect
                upperLabel={text.SortAfter}
                flex={"1"}
                onChange={e =>
                    dispatch({
                        type: UPDATE_SORT_BY,
                        sortBy: e.target.value
                    })
                }
                value={state.sortBy}
                outlined
                valueToTextMap={{
                    az: "A-Ö",
                    za: "Ö-A",
                    highestRating: "Högsta betyg",
                    lowestRating: "Lägsta betyg"
                }}
            />
        </Column>
    );
};

export default Filters;
