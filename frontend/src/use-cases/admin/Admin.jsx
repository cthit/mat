import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminCategories from "./screens/admin-categories";
import AdminRestaurants from "./screens/admin-restaurants";
import AdminHome from "./screens/admin-home";

const Admin = ({ location }) => {
    return (
        <Switch>
            <Route path={"/admin/categories"} component={AdminCategories} />
            <Route path={"/admin/restaurants"} component={AdminRestaurants} />
            <Route component={AdminHome} />
        </Switch>
    );
};

export default Admin;
