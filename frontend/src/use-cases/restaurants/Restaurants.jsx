import React, { useEffect, useState } from "react";
import {
    getAdminRestaurants,
    getRestaurants
} from "../../api/restaurants/get.restaurants.api";
import styled from "styled-components";
import DisplayRestaurants from "./elements/display-restaurants";
import { FilterContextProvider } from "./elements/filters/Filter.context";
import RestaurantsContext from "./Restaurants.context";
import { getCategories } from "../../api/categories/get.categories.api";
import EatIT from "./elements/eatit";
import FiltersContainer from "./elements/filters-container";
import LanguageSelection from "./elements/language-selection";
import useAdmin from "../../common/hooks/use-admin/use-admin";
import { NonStyledLink } from "../../common-ui/design";
import {
    useDigitTranslations,
    DigitLayout,
    DigitFAB,
    DigitLoading,
    useGammaStatus
} from "@cthit/react-digit-components";
import Add from "@material-ui/icons/Add";
import FiveZeroZero from "../../common/elements/fivezerozero";
import MobileCampusSelection from "./elements/mobile-campus-selection";

const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: min-content min-content 1fr;
    grid-gap: 1rem;

    @media (max-width: 767px) {
        grid-template-columns: auto;
    }

    margin-bottom: ${({ admin }) => (admin ? "72px" : "0")};
`;

const MobileCampusSelectionContainer = styled.div`
    margin: 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Restaurants = () => {
    const [status, setStatus] = useState(null);
    const [restaurants, setRestaurants] = useState(null);
    const [categories, setCategories] = useState(null);
    const [text] = useDigitTranslations();
    const admin = useAdmin();
    const [gammaLoading] = useGammaStatus();

    useEffect(() => {
        if (!gammaLoading) {
            Promise.all([
                admin ? getAdminRestaurants() : getRestaurants(),
                getCategories()
            ])
                .then(results => {
                    setRestaurants(results[0].data);
                    setCategories(results[1].data);
                })
                .catch(error => {
                    setStatus(error.response.status);
                });
        }
    }, [admin, gammaLoading, setStatus, setRestaurants, setCategories]);

    if (status) {
        return <FiveZeroZero />;
    }

    if ((restaurants == null || categories == null) && status == null) {
        return (
            <DigitLoading
                margin={{ left: "auto", right: "auto", top: "32px" }}
                loading
            />
        );
    }

    return (
        <RestaurantsContext.Provider value={{ restaurants, categories }}>
            <FilterContextProvider>
                <>
                    <Container admin={admin}>
                        <LanguageSelection />
                        <EatIT />
                        <MobileCampusSelectionContainer>
                            <MobileCampusSelection />
                        </MobileCampusSelectionContainer>
                        <FiltersContainer />
                        <DisplayRestaurants restaurants={restaurants} />
                    </Container>
                    {admin && (
                        <DigitLayout.DownRightPosition>
                            <NonStyledLink to={"/admin/restaurants/add"}>
                                <DigitFAB
                                    primary
                                    text={text.CreateRestaurant}
                                    icon={Add}
                                />
                            </NonStyledLink>
                        </DigitLayout.DownRightPosition>
                    )}
                </>
            </FilterContextProvider>
        </RestaurantsContext.Provider>
    );
};

export default Restaurants;
