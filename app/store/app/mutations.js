export default {
  Set_Title(state, payload) {
    state.title = payload
  },

  Toggle_App_Error(state) {
    state.app_error = !state.app_error
  },

  Set_App_Error(state, payload) {
    state.app_error = payload
  },

  Set_App_Error_Message(state, payload) {
    state.app_error_message = payload
  },

  Set_App_Success(state, payload) {
    state.app_success = payload
  },

  Set_App_Success_Message(state, payload) {
    state.app_success_message = payload
  },

  Set_With_Back(state, payload) {
    state.with_back = payload
  },

  Set_Proccess(state, payload) {
    state.proccess = payload
  },

  Set_Refresh(state, payload) {
    state.refresh = payload
  },
}
