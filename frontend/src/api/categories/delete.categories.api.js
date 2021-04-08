import { deleteRequest } from "../utils/api.utils";

export const deleteCategory = id => deleteRequest("/admin/categories/" + id);
