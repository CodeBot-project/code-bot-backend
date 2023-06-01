
import express from 'express'
import { rootRoute } from './routes/v1/api';

export function CreateWebServer() {
  const app = express();
  app.use('/api/v1/', rootRoute);
  return app;
}