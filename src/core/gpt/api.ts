import { AxiosResponse } from 'axios';
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from 'openai'
import { getConfig } from '../config/config';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function askChatGPT(prompt: string) {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const api = new OpenAIApi(configuration);
  let completion: AxiosResponse<CreateChatCompletionResponse, any>;
  
  completion = await api.createChatCompletion({
    model: getConfig().gpt.model,
    messages: [{role: 'user', content: prompt}]
  });

  return completion.data.choices[0].message?.content;
}
