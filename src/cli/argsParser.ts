
import { Command } from 'commander';
import { doGenerate } from './generate';
import { doWeb } from './web';
import * as initializer from './initialize';

export const init = () => {
  const program = new Command();
  program
    .name('code-bot')
    .description('todo')
    .version('0.0.1')
  
  program
    .command('generate')
    .action(() => {
      const exitCode = doGenerate(undefined);
    })

  program
    .command('web')
    .action(() => {
      const exitCode = doWeb(undefined);
    })

  initializer.init();
  program.parse();
}
