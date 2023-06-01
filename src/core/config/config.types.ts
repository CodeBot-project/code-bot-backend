
export type WebserverConfig = {
  port: number
}

export type GPTConfig = {
  prompt: string
}

export type Config = {
  webserver: WebserverConfig
  gpt: GPTConfig
}
