import React, { useEffect, useState } from "react";
import {
    DigitButton,
    DigitCRUD,
    DigitSelect,
    DigitSwitch,
    DigitTextField,
    DigitLayout,
    DigitText,
    useDigitTranslations
} from "@cthit/react-digit-components";
import {
    getRestaurant,
    getRestaurants
} from "../../../../../../api/restaurants/get.restaurants.api";
import { addRestaurant } from "../../../../../../api/restaurants/post.restaurants.api";
import { editRestaurant } from "../../../../../../api/restaurants/put.restaurants.api";
import { deleteRestaurant } from "../../../../../../api/restaurants/delete.restaurants.api";
import { getCategories } from "../../../../../../api/categories/get.categories.api";
import { useHistory, useParams } from "react-router-dom";
import MatRating from "../../../../../../common/elements/mat-rating";

const RestaurantsCRUD = () => {
    const [text, activeLanguage] = useDigitTranslations();
    const [categories, setCategories] = useState(null);
    const history = useHistory();

    useEffect(() => {
        getCategories().then(response => {
            const output = {};

            response.data.forEach(restaurant => {
                output[restaurant.id] = restaurant["name_" + activeLanguage];
            });

            setCategories(output);
        });
    }, []);

    if (categories == null) {
        return null;
    }

    return (
        <DigitCRUD
            path={"/admin/restaurants"}
            name={"AdminRestaurants"}
            readAllRequest={getRestaurants}
            createRequest={addRestaurant}
            readOneRequest={getRestaurant}
            updateRequest={editRestaurant}
            deleteRequest={deleteRestaurant}
            formInitialValues={{
                name: "",
                category_id: "",
                menu: "",
                campus_location: "johanneberg",
                maps_link: "",
                phone_number: ""
            }}
            formComponentData={{
                name: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true
                    }
                },
                category_id: {
                    component: DigitSelect,
                    componentProps: {
                        outlined: true,
                        valueToTextMap: categories
                    }
                },
                menu: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true
                    }
                },
                campus_location: {
                    component: DigitSelect,
                    componentProps: {
                        outlined: true,
                        valueToTextMap: {
                            johanneberg: "Johanneberg",
                            lindholmen: "Lindholmen"
                        }
                    }
                },
                hidden: {
                    component: DigitSwitch,
                    componentProps: {
                        primary: true,
                        label: text.HideRestaurant
                    }
                },
                maps_link: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true
                    }
                },
                phone_number: {
                    component: DigitTextField,
                    componentProps: {
                        outlined: true
                    }
                }
            }}
            keysOrder={[
                "id",
                "name",
                "category_id",
                "menu",
                "hidden",
                "campus_location",
                "maps_link",
                "phone_number",
                "rating"
            ]}
            createKeysOrder={[
                "name",
                "category_id",
                "menu",
                "campus_location",
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
                phone_number: text.PhoneNumber
            }}
            useKeyTextsInUpperLabel
            useHistoryGoBackOnBack
            tableProps={{
                titleText: text.Restaurants,
                startOrderBy: "name",
                search: true,
                flex: "1",
                startOrderByDirection: "asc",
                size: { minWidth: "288px" }
            }}
            detailsButtonText={text.Details}
            idProp={"id"}
            customDetailsRenders={{
                rating: ({ rating }) =>
                    rating == null ? (
                        <DigitText.Text
                            alignCenter
                            bold
                            text={text.NoRatings}
                        />
                    ) : (
                        <DigitLayout.Center>
                            <MatRating
                                value={rating}
                                readOnly
                                upperLabel={text.Rating}
                            />
                        </DigitLayout.Center>
                    )
            }}
            detailsRenderCardEnd={data => (
                <DigitButton
                    outlined
                    margin={{ top: "16px" }}
                    alignSelf={"center"}
                    size={{ width: "auto" }}
                    text={text.EditOpeningHours}
                    onClick={() =>
                        history.push(
                            "/admin/restaurants/" + data.id + "/opening_hours"
                        )
                    }
                />
            )}
            readAllBackButton
            detailsTitle={one => one.name}
        />
    );
};

export default RestaurantsCRUD;
