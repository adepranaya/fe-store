
export default {
  requestInterceptor(config) {
    // set baseUrl
    const { $options } = globalThis.$nuxt
    config.baseURL = $options.$config.API_URL

    return config
  },

  errRequestInterceptor(error) {
    return Promise.reject(error)
  },

  responseInterceptor(response) {
    return response
  },

  errResponseInterceptor(error) {
    return Promise.reject(error)
  },
}
