import axios from 'axios'

let baseURL = "/"

const service = axios.create({
  baseURL,
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.error("Error:", error)
    return Promise.reject(error)
  }
)

export default service;
