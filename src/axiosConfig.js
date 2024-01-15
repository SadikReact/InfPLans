import axios from "axios";

const instance = axios.create({
  baseURL: "http://146.190.156.174:5050/",
});

export default instance;
