
export type WebserverConfig = {
  port: number
}

export type GPTConfig = {
  prompt: string
  model: string
}

export type Config = {
  webserver: WebserverConfig
  gpt: GPTConfig
}
