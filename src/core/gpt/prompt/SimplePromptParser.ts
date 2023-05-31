import { Input } from "../../input/input.types";
import { PromptParser } from "./PromptParser";

export class SimplePromptParser extends PromptParser {
  parse(prompt: string, input: Input): string {
    return prompt
      .replace("[name]", input.name)
      .replace("[requirements]", input.requirements.join(", "))
      .replace(
        "[languages]",
        input.languages.map((e) => `${e.name} ${e.version}`).join(", ")
      )
      .replace(
        "[dependencies]",
        input.dependencies.map((e) => `${e.name} ${e.version}`).join(", ")
      );
  }
}
