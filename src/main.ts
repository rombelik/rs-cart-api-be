import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

import helmet from "helmet";

let server: Handler;

import { AppModule } from './app.module';

const port = process.env.PORT || 4000;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  // await app.init();

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());
  const expressApp = app.getHttpAdapter().getInstance();

  await expressApp.listen(port);

  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
