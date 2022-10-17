import appConstant from "../constant/app.constant"

function contextWrapper(func) {
  if (process.browser) {
    const context = window.$nuxt
    return func(context)
  }
}

export default {
  // if call api error
  async apiWrapper(func) {
    try {
      return await func()
    } catch (error) {
      // naming error from api
      error.name = appConstant.api.error.name
      throw error
    }
  },

  // if action store error
  async actionWrapper(func) {
    try {
      await func()
      resetApiError()
    } catch (error) {
      // do something with the error
      // if error from api
      if (error.name === appConstant.api.error.name) {
        handleApiError(error)
      } else {
        handleUnexpectedError(error)
      }
    }
  },

  async submitWrapper(func) {
    try {
      const isValid = await func()

      if (!isValid) return

      contextWrapper((context) => {
        const { $store } = context
        if (!$store.state.app.app_error) {
          const message = "Berhasil"
          // const message = getApiMessage(error)
          // Show snackbar & set success message
          $store.commit("app/Set_App_Success", true)
          $store.commit("app/Set_App_Success_Message", message)
        }
      })
    } catch (error) {
      // do something with error
    }
  },
}

// do something with the error from api
function handleApiError(error) {
  contextWrapper((context) => {
    const { $store } = context
    const message = getApiMessage(error)

    // Show snackbar & set error message
    $store.commit("app/Set_App_Error", true)
    $store.commit("app/Set_App_Error_Message", message)
  })
}

// reset error from api if success
function resetApiError() {
  contextWrapper((context) => {
    const { $store } = context

    // Show snackbar & set error message
    $store.commit("app/Set_App_Error", false)
    $store.commit("app/Set_App_Error_Message", '')
  })
}

// do something with the unexpected error on action store
function handleUnexpectedError(error) {
  contextWrapper((context) => {
    const { $store } = context

    $store.commit("app/Set_App_Error", true)
    $store.commit("app/Set_App_Error_Message", error.message)
  })
}

function getApiMessage(error) {
  if (error.response === undefined) {
    return error.message
  }

  if (error.response.data !== undefined) {
    const message = setErrorFromCodeAndUrl(
      error.response.status,
      error.response.config.url,
      error
    )

    return message
  } else {
    return error.message
  }
}

function setErrorFromCodeAndUrl(errCode = 0, url = "", error) {
  if (url.includes("/login")) {
    switch (errCode) {
      case 401:
        return "Username or Password Not Found"

      case 500:
        return error.message

      default:
        return error.response.data.message
    }
  } else {
    switch (errCode) {
      case 401:
        return "Your session expired, please login again"
      case 500:
        return error.message

      default:
        return error.response.data.message
    }
  }
}
