import actionHelper from '../helper/action.helper'
import api from '../services/api.service'

const parentPath = '/products'

export default {
  async browse(params) {
    return await actionHelper.apiWrapper(async () => {
      const resp = await api.get(parentPath, { params })
      const total = resp.headers['x-total-count'] || 0
      return {data: resp.data, total}
    })
  },
  async read(params) {
    return await actionHelper.apiWrapper(async () => {
      const resp = await api.get(`${parentPath}/${params.id}`)
      return resp.data
    })
  },
}
