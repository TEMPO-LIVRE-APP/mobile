import axios from "axios";

const client = axios.create({
    baseURL: "https://tempo-livre.onrender.com"
})

export { client }