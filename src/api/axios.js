import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://192.168.18.3:5000",
})
export default axiosInstance