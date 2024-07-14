import axios from "axios";

export const addressInstance = axios.create({
  baseURL: "http://localhost:5050/",
});
