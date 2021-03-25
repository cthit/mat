import React from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantsCRUD from "./restaurants-crud";
import RestaurantsOpeningHours from "./restaurants-opening-hours";

const AdminRestaurants = () => {
    return (
        <Switch>
            <Route
                path={"/admin/restaurants/:id/opening_hours"}
                component={RestaurantsOpeningHours}
            />
            <Route path={"/admin/restaurants"} component={RestaurantsCRUD} />
        </Switch>
    );
};

export default AdminRestaurants;
