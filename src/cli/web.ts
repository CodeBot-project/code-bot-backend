import { Server } from 'http';
import { getConfig } from '../core/config/config';
import { CreateWebServer } from '../web/server';
import { CommandFunction } from './cli.types'

export const doWeb: CommandFunction = (args: any) => {
  const app = CreateWebServer();
  const port = getConfig().webserver?.port
  
  let server: Server;

  server = app.listen(port, () => {
    console.log(`[ Web ] Listening at port ${port}`);
  })

  const cleanup = () => {
    console.log('[ Web ] Shutting down web server')
    server.close((e) => {
      if(e != undefined) console.log(e)
    })
  }

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  
  return 0;
}
