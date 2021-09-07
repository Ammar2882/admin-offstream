import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://backend--ofstream-api.herokuapp.com/",
})
export default axiosInstance
