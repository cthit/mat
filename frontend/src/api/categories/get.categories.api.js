import { getRequest } from "../utils/api.utils";

export const getCategories = () => getRequest("/categories");
