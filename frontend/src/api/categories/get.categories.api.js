import { getRequest } from "../utils/api.utils";

export const getCategories = () => getRequest("/categories");

export const getCategory = id => getRequest("/categories/" + id);
