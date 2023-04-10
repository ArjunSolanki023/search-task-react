import axios from "axios";

console.log("import.meta.env.BASE_URL", import.meta.env.VITE_APP_API_ENDPOINT)

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
});

export default instance;
