import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminCategories from "./screens/admin-categories";
import AdminRestaurants from "./screens/admin-restaurants";
import useAdmin from "../../common/hooks/use-admin/use-admin";
import InsufficientAccess from "./screens/insufficient-access/InsufficientAccess.screen";
import { useGammaStatus } from "@cthit/react-digit-components";

const Admin = () => {
    const [loading] = useGammaStatus();
    const isAdmin = useAdmin();

    if (!loading && !isAdmin) {
        return <InsufficientAccess />;
    }

    return (
        <Switch>
            <Route path={"/admin/categories"} component={AdminCategories} />
            <Route path={"/admin/restaurants"} component={AdminRestaurants} />
        </Switch>
    );
};

export default Admin;
