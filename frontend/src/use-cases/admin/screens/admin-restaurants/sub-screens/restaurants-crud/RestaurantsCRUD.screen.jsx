import React, { useEffect, useState } from "react";
import {
    DigitButton,
    DigitCRUD,
    DigitSwitch,
    DigitTextField,
    useDigitTranslations,
    DigitAutocompleteSelectSingle,
    DigitRadioButtonGroup,
    DigitDesign,
    DigitDisplayData
} from "@cthit/react-digit-components";
import { getRestaurant } from "../../../../../../api/restaurants/get.restaurants.api";
import { addRestaurant } from "../../../../../../api/restaurants/post.restaurants.api";
import { editRestaurant } from "../../../../../../api/restaurants/put.restaurants.api";
import { deleteRestaurant } from "../../../../../../api/restaurants/delete.restaurants.api";
import { getCategories } from "../../../../../../api/categories/get.categories.api";
import RestaurantHeader from "../../../../../../common/elements/restaurant-header";
import RestaurantBody from "../../../../../../common/elements/restaurant-body";
import { NonStyledLink } from "../../../../../../common-ui/design";
import ArrowBack from "@material-ui/icons/ArrowBack";
import RestaurantMenu from "@material-ui/icons/RestaurantMenu";
import Schedule from "@material-ui/icons/Schedule";
import Edit from "@material-ui/icons/Edit";
import styled from "styled-components";
import FourZeroFour from "../../../../../../common/elements/fourzerofour";
import FiveZeroZero from "../../../../../../common/elements/fivezerozero";
import { Link, useHistory } from "react-router-dom";
import { restaurantValidation } from "../../../../../../validation/restaurant.validation";

const EditLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
`;

const DetailsContainer = styled.div`
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 72px;
`;

const Buttons = styled.div`
    display: grid;
    grid-template-columns: max-content;
    grid-auto-rows: min-content;
    grid-gap: 8px;
    justify-items: stretch;
    justify-content: center;
    padding: 16px;
`;

const RestaurantDetails = ({ data }) => {
    const { id } = data;
    const [text] = useDigitTranslations();

    if (data == null) {
        return null;
    }

    return (
        <DetailsContainer>
            <NonStyledLink to={"/"}>
                <DigitButton
                    outlined
                    justifySelf={"flex-start"}
                    startIcon={<ArrowBack />}
                    text={text.BackToRestaurants}
                    margin={{ bottom: "16px" }}
                />
            </NonStyledLink>

            <DigitDesign.Card size={{ height: "min-content" }}>
                <RestaurantHeader data={data} />
                <DigitDesign.CardBody>
                    <RestaurantBody data={data} />
                    <DigitDisplayData
                        margin={"4px"}
                        alignSelf={"center"}
                        data={data}
                        keysOrder={["menu", "hidden", "campus_location"]}
                        keysText={{
                            campus_location: text.CampusLocation,
                            hidden: text.Hidden,
                            menu: text.Menu
                        }}
                    />
                </DigitDesign.CardBody>
                <Buttons>
                    <EditLink to={"/admin/restaurants/" + id + "/edit"}>
                        <DigitButton
                            flex={"1"}
                            margin={"0"}
                            outlined
                            text={text.EditRestaurant}
                            startIcon={<Edit />}
                        />
                    </EditLink>
                    <EditLink to={"/admin/restaurants/" + id + "/menu"}>
                        <DigitButton
                            flex={"1"}
                            margin={"0"}
                            outlined
                            text={text.EditMenu}
                            startIcon={<RestaurantMenu />}
                        />
                    </EditLink>
                    <EditLink
                        to={"/admin/restaurants/" + id + "/opening_hours"}
                    >
                        <DigitButton
                            flex={"1"}
                            margin={"0"}
                            outlined
                            text={text.EditOpeningHours}
                            startIcon={<Schedule />}
                        />
                    </EditLink>
                </Buttons>
            </DigitDesign.Card>
        </DetailsContainer>
    );
};

const RestaurantsCRUD = () => {
    const [text, activeLanguage] = useDigitTranslations();
    const [categories, setCategories] = useState(null);
    const history = useHistory();

    useEffect(() => {
        getCategories().then(response => {
            const output = response.data.map(restaurant => ({
                value: restaurant.id,
                text: restaurant["name_" + activeLanguage]
            }));

            setCategories(output);
        });
    }, [activeLanguage]);

    if (categories == null) {
        return null;
    }

    return (
        <DigitCRUD
            path={"/admin/restaurants"}
            name={"AdminRestaurants"}
            createRequest={addRestaurant}
            readOneRequest={getRestaurant}
            updateRequest={editRestaurant}
            deleteRequest={deleteRestaurant}
            formInitialValues={{
                campus_location: "johanneberg"
            }}
            formComponentData={{
                name: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true,
                        size: { width: "280px" }
                    }
                },
                category_id: {
                    component: DigitAutocompleteSelectSingle,
                    componentProps: {
                        outlined: true,
                        options: categories,
                        size: { width: "280px" }
                    }
                },
                menu: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true,
                        size: { width: "280px" }
                    }
                },
                campus_location: {
                    component: DigitRadioButtonGroup,
                    componentProps: {
                        outlined: true,
                        radioButtons: [
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
                        ],
                        size: { width: "280px" }
                    },
                    formatEvent: e => e.target.value
                },
                hidden: {
                    component: DigitSwitch,
                    componentProps: {
                        primary: true,
                        label: text.HideRestaurant,
                        size: { width: "280px" }
                    }
                },
                maps_link: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true,
                        size: { width: "280px" }
                    }
                },
                address: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true,
                        size: { width: "280px" }
                    }
                },
                phone_number: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true,
                        size: { width: "280px" }
                    }
                }
            }}
            updateKeysOrder={[
                "id",
                "name",
                "category_id",
                "menu",
                "hidden",
                "campus_location",
                "address",
                "maps_link",
                "phone_number",
                "rating"
            ]}
            readAllKeysOrder={["name", "address", "campus_location"]}
            createKeysOrder={[
                "name",
                "category_id",
                "menu",
                "campus_location",
                "address",
                "maps_link",
                "phone_number"
            ]}
            keysText={{
                id: "Id",
                name: text.Name,
                category_id: text.Category,
                menu: text.Menu,
                campus_location: text.CampusLocation,
                maps_link: text.MapsLink,
                phone_number: text.PhoneNumber,
                address: text.Address,
                hidden: text.Hidden
            }}
            useKeyTextsInUpperLabel
            useHistoryGoBackOnBack
            detailsCustomRender={(restaurant, goBack) => (
                <RestaurantDetails data={restaurant} />
            )}
            statusRenders={{
                404: () => <FourZeroFour />,
                500: () => <FiveZeroZero />
            }}
            idProp={"id"}
            toastCreateFailed={() => text.CreateRestaurantFailed}
            toastCreateSuccessful={() => text.CreateRestaurantSuccess}
            toastUpdateFailed={() => text.UpdateRestaurantFailed}
            toastUpdateSuccessful={() => text.UpdateRestaurantSuccess}
            toastDeleteFailed={() => text.UpdateRestaurantFailed}
            toastDeleteSuccessful={() => text.DeleteRestaurantSuccess}
            updateTitle={one => one.name}
            createTitle={text.CreateRestaurant}
            createButtonText={text.CreateRestaurant}
            backButtonText={text.Back}
            deleteButtonText={() => text.DeleteRestaurant}
            updateButtonText={() => text.UpdateRestaurant}
            dialogDeleteTitle={() => text.AreYouSure}
            dialogDeleteConfirm={() => text.DeleteRestaurant}
            dialogDeleteCancel={() => text.Cancel}
            onDelete={() => history.push("/")}
            formValidationSchema={restaurantValidation(text)}
        />
    );
};

export default RestaurantsCRUD;
