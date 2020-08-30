import { getRequest } from "../utils/api.utils";

export const getRestaurants = () => getRequest("/restaurants");

export const getRestaurant = id => getRequest("/restaurants/" + id);

export const getAdminRestaurants = () => getRequest("/admin/restaurants");

export const getMenu = id => getRequest("/restaurants/" + id + "/menu");
