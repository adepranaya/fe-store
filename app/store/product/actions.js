import productApi from '~/app/api/product.api'
import actionHelper from '~/app/helper/action.helper'

export default {
  async browse(context, payload) {
    context.commit('Set_Loading', true)
    await actionHelper.actionWrapper(async () => {
      const resp = await productApi.browse(payload)

      context.commit('Set_Total', resp.total)
      context.commit('Set_Items', resp.data)
    })
    context.commit('Set_Loading', false)
  },
  async read(context, payload) {
    context.commit('Set_Loading', true)
    await actionHelper.actionWrapper(async () => {
      const resp = await productApi.read(payload)

      context.commit('Set_Item', resp)
    })
    context.commit('Set_Loading', false)
  },
}
