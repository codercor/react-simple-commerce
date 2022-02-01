import axios from "axios";

let service = axios.create({
    baseURL: "http://localhost:3001"
})

export default service;