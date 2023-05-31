import { Input } from "../../input/input.types";

export abstract class PromptParser {
  abstract parse(prompt: string, input: Input): string
}
