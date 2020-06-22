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

const Sticky = styled.div`
    position: sticky;
    width: 100%;
    height: auto;
    top: 0;
`;

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
    const [state, dispatch] = useContext(FilterContext);
    const { categories } = useContext(RestaurantsContext);
    const [, activeLanguage] = useDigitTranslations();

    return (
        <div>
            {" "}
            {/*Needed to make sticky work*/}
            <Sticky>
                <DigitDesign.Card size={{ width: "100%", height: "auto" }}>
                    <DigitDesign.CardBody>
                        <Column>
                            <DigitText.Title text={"Campus?"} />
                            <DigitRadioButtonGroup
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
                            <InlineRow>
                                <DigitText.Title text={"Öppet nu?"} />
                                <DigitSwitch
                                    size={{ width: "60px" }}
                                    primary
                                    value={state.openNow}
                                    onChange={e =>
                                        dispatch({
                                            type: UPDATE_OPEN_NOW,
                                            openNow: e.target.checked
                                        })
                                    }
                                />
                            </InlineRow>
                            <DigitDesign.Divider />
                            <DigitText.Title text={"Kategorier?"} />
                            {categories.map(category => (
                                <DigitCheckbox
                                    key={category.id}
                                    size={{ width: "100%" }}
                                    primary
                                    onChange={e =>
                                        dispatch({
                                            type: UPDATE_CATEGORY,
                                            category: category.id
                                        })
                                    }
                                    value={state.categories.includes(
                                        category.id
                                    )}
                                    label={category["name_" + activeLanguage]}
                                />
                            ))}
                            <DigitDesign.Divider />
                            <DigitText.Title text={"Sortera efter..."} />
                            <DigitSelect
                                size={{ width: "100%" }}
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
                            <DigitText.Title text={"Namn på restaurangen..."} />
                            <DigitTextField
                                size={{ width: "100%" }}
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
                            <InlineRow>
                                <DigitText.Title text={"Inte recenserat?"} />
                                <DigitSwitch
                                    size={{ width: "60px" }}
                                    primary
                                    value={state.reviewed}
                                    onChange={e =>
                                        dispatch({
                                            type: UPDATE_REVIEWED,
                                            openNow: e.target.checked
                                        })
                                    }
                                />
                            </InlineRow>
                        </Column>
                    </DigitDesign.CardBody>
                </DigitDesign.Card>
            </Sticky>
        </div>
    );
};

export default Filters;
