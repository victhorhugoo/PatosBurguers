import axios from "axios";

const api = axios.create({
  baseURL:
    "https://patos-burguers-backend-gtdn489ct-victors-projects-b875633f.vercel.app",
});

export default api;
