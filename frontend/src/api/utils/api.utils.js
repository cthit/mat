import axios from "axios";

export const getRequest = url => {
    return axios.get("/api" + url);
};

export const postRequest = (url, data) => {
    return axios.post("/api" + url, data);
};
