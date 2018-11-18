import { get } from "../utils/api.utils";

export function restaurants() {
    return get("/api/mat.json");
}
