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
import FilterContext, {
    UPDATE_CAMPUS,
    UPDATE_CATEGORY,
    UPDATE_NAME,
    UPDATE_OPEN_NOW,
    UPDATE_REVIEWED,
    UPDATE_SORT_BY
} from "./Filter.context";
import RestaurantsContext from "../../Restaurants.context";

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const InlineRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

/*
    {
        campus: null | "johanneberg" | "lindholmen",
        category: ["..."],
        openNow: false | true,
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
            <DigitCheckbox
                label={text.OpenRightNow}
                primary
                value={state.openNow || false}
                onChange={e =>
                    dispatch({
                        type: UPDATE_OPEN_NOW,
                        openNow: e.target.checked
                    })
                }
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
            <DigitDesign.Divider />
            <DigitCheckbox
                label={text.Reviewed}
                primary
                value={state.reviewed || false}
                onChange={e =>
                    dispatch({
                        type: UPDATE_REVIEWED,
                        reviewed: e.target.checked
                    })
                }
            />
        </Column>
    );
};

export default Filters;
