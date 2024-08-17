import axios from "axios";
const token = localStorage.getItem("@token");

export const api = axios.create({
  baseURL: "https://reqres.in/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
