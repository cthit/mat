import React, { useEffect, useState } from "react";
import {
    DigitCRUD,
    DigitSelect,
    DigitSwitch,
    DigitTextField,
    useDigitTranslations
} from "@cthit/react-digit-components";
import { getCategories } from "../../../../api/categories/get.categories.api";
import {
    getRestaurant,
    getRestaurants
} from "../../../../api/restaurants/get.restaurants.api";
import { addRestaurant } from "../../../../api/restaurants/post.restaurants.api";
import { editRestaurant } from "../../../../api/restaurants/put.restaurants.api";
import { deleteRestaurant } from "../../../../api/restaurants/delete.restaurants.api";

const AdminRestaurants = () => {
    const [text, activeLanguage] = useDigitTranslations();
    const [categories, setCategories] = useState(null);

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
                campus_location: "johanneberg"
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
                }
            }}
            keysOrder={[
                "id",
                "name",
                "category_id",
                "menu",
                "hidden",
                "campus_location"
            ]}
            createKeysOrder={["name", "category_id", "menu", "campus_location"]}
            keysText={{
                id: "Id",
                name: text.Name,
                category_id: text.Category,
                menu: text.Menu,
                campus_location: text.CampusLocation
            }}
            useKeyTextsInUpperLabel
            useHistoryGoBackOnBack
            tableProps={{
                titleText: text.Categories,
                startOrderBy: "name",
                margin: "auto",
                search: true,
                flex: "1",
                startOrderByDirection: "asc",
                size: { minWidth: "288px" },
                padding: "0px"
            }}
            detailsButtonText={text.Details}
            idProp={"id"}
        />
    );
};

export default AdminRestaurants;
