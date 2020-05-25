import { deleteRequest } from "../utils/api.utils";

export const deleteRestaurant = id => deleteRequest("/admin/restaurants/" + id);
