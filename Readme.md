# code-bot
TODO: Describe project here

- [code-bot](#code-bot)
  - [Getting started](#getting-started)
  - [Dev notes](#dev-notes)
    - [Folder structure](#folder-structure)


## Getting started
TODO: Explain how to set up the project

## Dev notes
### Folder structure
- `src` contains the source code of the project
  - `core` contains internal libraries
    - `config` is for config file parsing
    - `generators` contains shell script generators
    - `gpt` contains an interface to OpenAI ChatGPT API
    - `input` is for input file parsing
  - `cli` provides a command line interface
  - `web` provides a web server interface

```
└── src
    ├── cli
    │   ├── argsParser.ts
    │   ├── cli.types.ts
    │   ├── generate.ts
    │   └── web.ts
    ├── core
    │   ├── config
    │   │   └── config.ts
    │   ├── generators
    │   │   ├── BashCodeGenerator.ts
    │   │   ├── CodeGenerator.ts
    │   │   └── PowerShellCodeGenerator.ts
    │   ├── gpt
    │   │   ├── api.ts
    │   │   └── prompt.ts
    │   └── input
    │       ├── inputProcessor.ts
    │       └── input.ts
    ├── main.ts
    └── web
```
