import { putRequest } from "../utils/api.utils";

export const editCategory = (id, data) =>
    putRequest("/admin/categories/" + id, data);
