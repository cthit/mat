import { postRequest } from "../utils/api.utils";

export const addCategory = data => postRequest("/admin/categories", data);
