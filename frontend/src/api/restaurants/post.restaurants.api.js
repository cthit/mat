import { postRequest } from "../utils/api.utils";

export const addRestaurant = data => postRequest("/admin/restaurants", data);
