import express, { Request, Response } from 'express'
import { ErrorResponse, GenerateResponse } from './response.types';
import { getConfig } from '../../../core/config/config';
import { SimplePromptParser } from '../../../core/gpt/prompt/SimplePromptParser';
import { parseInput } from '../../../core/input/input';
import { Input } from '../../../core/input/input.types';
import { askChatGPT } from '../../../core/gpt/api';

export const rootRoute = express.Router();

rootRoute.get('/live', (req: Request, res: Response) => {
  res.status(200).send("Server is up");
})

rootRoute.get('/generate', async (req: Request, res: Response) => {
  // Step 1: Extract the input from req.body
  const body = req.body;
  let input: Input
  try {
    input = parseInput(body)
  } catch (e) {
    res.status(400).json({
      msg: "Bad format"
    } as ErrorResponse)
  }

  // Step 2: Get the prompt template from the config
  const promptTemplate = getConfig().gpt.prompt

  // Step 3: Replace stuff in the prompt template with values of the input 
  const prompt = new SimplePromptParser().parse(promptTemplate, input!)

  // Step 4: Send prompt to chatGPT and get the response back
  let gptResponse 

  try {
    gptResponse = await askChatGPT(prompt);
  } catch(e) {
    console.log('matal3ash');

    res.status(500).json({
      msg: "Couldn't get response from OpenAI API"
    } as ErrorResponse)
  }

  // Step 5: Send the response with 200
  res.status(200).json({
    response: gptResponse
  } as GenerateResponse);
})
