import actionHelper from "../helper/action.helper"
import currencyHelper from "../helper/currency.helper"
import inputService from "../services/input.service"

export default (context, inject) => {
  inject("submit", actionHelper.submitWrapper)
  inject("currency", currencyHelper)
  inject("input", inputService)
}
