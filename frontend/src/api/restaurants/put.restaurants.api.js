import { putRequest } from "../utils/api.utils";

export const editRestaurant = (id, data) =>
    putRequest("/admin/restaurants/" + id, data);
