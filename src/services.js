
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://testapi.io/api/redealumni"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  }
}
