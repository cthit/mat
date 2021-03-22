import { useCallback, useContext } from "react";
import useAdmin from "../../../../../common/hooks/use-admin/use-admin";
import FilterContext from "../../filters/Filter.context";
import find from "lodash/find";

function useRestaurantFilter() {
    const isAdmin = useAdmin();
    const [filters] = useContext(FilterContext);

    return useCallback(
        restaurant => {
            const {
                campus_location,
                category_id,
                openStatus,
                name,
                hidden
            } = restaurant;

            if (filters == null) {
                return true;
            }

            if (!name.toLowerCase().includes(filters.name.toLowerCase())) {
                return false;
            } else if (filters.campus !== campus_location) {
                return false;
            } else if (
                filters.categories.length > 0 &&
                !find(filters.categories, { id: category_id })
            ) {
                return false;
            } else if (
                filters.openNow &&
                (openStatus === "closed" || openStatus === "no-information")
            ) {
                return false;
            } else if (!isAdmin && hidden) {
                return false;
            }

            return true;
        },
        [filters, isAdmin]
    );
}

export default useRestaurantFilter;
