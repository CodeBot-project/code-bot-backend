import { Input } from "./input.types";
import YAML from 'yaml'

export function parseInput(input: string) { 
  let result: Input
  try {
    result = YAML.parse(input!) as Input;
  } catch(e) {
    console.error(`Error: couldn't parse input: ${e}`)
    throw e
  }
  return result
}
