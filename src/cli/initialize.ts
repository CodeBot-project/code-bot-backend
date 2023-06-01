import * as config from '../core/config/config'
import { askChatGPT } from '../core/gpt/api'
import { SimplePromptParser } from '../core/gpt/prompt/SimplePromptParser'
import { parseInput } from '../core/input/input'

export const init = () => {
  config.init()
  const cfg = config.getConfig()
}