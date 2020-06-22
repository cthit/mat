import { createContext } from "react";
const RestaurantsContext = createContext([
    { categories: null, restaurants: null }
]);
export default RestaurantsContext;
