import React from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantsCRUD from "./sub-screens/restaurants-crud";
import RestaurantsOpeningHours from "./sub-screens/restaurants-opening-hours";
import RestaurantsEditMenu from "./sub-screens/restaurants-edit-menu";

const AdminRestaurants = () => {
    return (
        <Switch>
            <Route
                path={"/admin/restaurants/:id/menu"}
                component={RestaurantsEditMenu}
            />
            <Route
                path={"/admin/restaurants/:id/opening_hours"}
                component={RestaurantsOpeningHours}
            />
            <Route path={"/admin/restaurants"} component={RestaurantsCRUD} />
        </Switch>
    );
};

export default AdminRestaurants;
