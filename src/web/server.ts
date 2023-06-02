
import express from 'express'
import { rootRoute } from './routes/v1/api';
import bodyParser from 'body-parser';

export function CreateWebServer() {
  const app = express();
  app.use(bodyParser.text());
  app.use('/api/v1/', rootRoute);
  return app;
}