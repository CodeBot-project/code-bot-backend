export type Language = {
  name: string;
  version: string;
}

export type Dependency = {
  name: string;
  version: string;
}

export type Input = {
  name: string;
  requirements: string[];
  languages: Language[];
  dependencies: Dependency[]; //libiraries, frameworks,....
}
