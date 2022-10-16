import axios from "axios"
import interceptorHelper from "../helper/interceptor.helper"

const api = axios.create({
  timeout: 15000,
  headers: {},
})

api.interceptors.request.use(
  interceptorHelper.requestInterceptor,
  interceptorHelper.errRequestInterceptor
)

api.interceptors.response.use(
  interceptorHelper.responseInterceptor,
  interceptorHelper.errResponseInterceptor
)

export default api
