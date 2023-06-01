import { Config } from "./config.types";
import YAML from 'yaml'
import fs from 'fs';

let cfg: Config | null = null;
const cfgPath = './config.yaml'

export function init() {
  let cfgFile: string;

  try {
    cfgFile = fs.readFileSync(cfgPath, 'utf8');
  } catch(e) {
    console.error(`Fatal error: couldn't read config file ${cfgPath}: ${e}`)
    process.exit(1)
  }
  
  try {
    cfg = YAML.parse(cfgFile!) as Config;
  } catch(e) {
    console.error(`Fatal error: couldn't read config file ${cfgPath}: ${e}`)
    process.exit(1)
  }
}

export function getConfig(): Config  {
  return cfg!;
}
