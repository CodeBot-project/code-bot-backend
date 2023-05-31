import * as config from '../core/config/config'

export const init = () => {
  config.init()
  const cfg = config.getConfig()
}