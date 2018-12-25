import axios from "axios";

const baseUrl =
    process.env.NODE_ENV === "development" ? "http://127.0.0.1:8080" : "";

export function get(endpoint) {
    return axios.get(baseUrl + endpoint);
}
