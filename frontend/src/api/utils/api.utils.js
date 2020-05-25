import axios from "axios";

export const getRequest = (url, convert = response => response) => {
    return new Promise((resolve, reject) => {
        axios
            .get("/api" + url)
            .then(response => {
                resolve(convert(response));
            })
            .catch(error => reject(error));
    });
};

export const postRequest = (url, data) => {
    return axios.post("/api" + url, data);
};

export const putRequest = (url, data) => {
    return axios.put("/api" + url, data);
};

export const deleteRequest = url => {
    return axios.delete("/api" + url);
};
