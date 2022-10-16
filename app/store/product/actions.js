import productApi from "~/app/api/product.api"
import actionHelper from "~/app/helper/action.helper"


export default {
  async browse(context, payload) {
    await actionHelper.actionWrapper(async () => {
      const resp = await productApi.browse(payload)

      context.commit("Set_Total", resp.total)
      context.commit("Set_Items", resp.data)
    })
  },
}
