import * as config from '../core/config/config'
import { parseInput } from '../core/input/input'

export const init = () => {
  config.init()
  const cfg = config.getConfig()
}