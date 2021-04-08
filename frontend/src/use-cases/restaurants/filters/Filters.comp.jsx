import React, { useContext } from "react";
import styled from "styled-components";
import {
    DigitCheckbox,
    DigitDesign,
    DigitRadioButtonGroup,
    DigitSelect,
    DigitSwitch,
    DigitText,
    DigitTextField,
    useDigitTranslations
} from "@cthit/react-digit-components";
import FilterCompContext, {
    UPDATE_CAMPUS,
    UPDATE_CATEGORY,
    UPDATE_NAME,
    UPDATE_OPEN_NOW,
    UPDATE_SORT_BY
} from "./Filter.comp.context";
import RestaurantsContext from "../Restaurants.context";

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
    const [state, dispatch] = useContext(FilterCompContext);
    const { categories } = useContext(RestaurantsContext);
    const [, activeLanguage] = useDigitTranslations();

    const filterCategoriesById = state.categories.map(category => category.id);

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
            <DigitSwitch
                size={{ width: "max-content" }}
                primary
                onChange={e =>
                    dispatch({
                        type: UPDATE_OPEN_NOW,
                        openNow: e.target.checked
                    })
                }
                value={state.openNow}
                label={text.OpenRightNow}
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
                            category: { ...category }
                        })
                    }
                    value={filterCategoriesById.includes(category.id)}
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
                    az: text.az,
                    za: text.za,
                    highestRating: text.highestRating,
                    lowestRating: text.lowestRating
                }}
                margin={{ top: "16px" }}
            />
        </Column>
    );
};

export default Filters;
