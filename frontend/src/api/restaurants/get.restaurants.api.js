import { get } from "../utils/api.utils";

export function loadRestaurants() {
    return get("/api/mat.json");
}
