import actionHelper from "../helper/action.helper"
import currencyHelper from "../helper/currency.helper"

export default (context, inject) => {
  inject("submit", actionHelper.submitWrapper)
  inject("currency", currencyHelper)
}
