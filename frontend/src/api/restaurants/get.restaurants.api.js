import { getRequest } from "../utils/api.utils";

export const getRestaurants = () => getRequest("/restaurants");

export const getRestaurant = id => getRequest("/restaurants/" + id);
