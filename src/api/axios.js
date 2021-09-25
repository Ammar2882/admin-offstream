import axios from "axios"
import { baseUrl } from "./Endpoints"

const axiosInstance = axios.create({
  baseURL: baseUrl,
})
export default axiosInstance
