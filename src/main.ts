import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

import helmet from "helmet";

let server: Handler;

import { AppModule } from './app.module';

const port = parseInt(<string>process.env.PORT, 10) || 3000

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());
  const expressApp = app.getHttpAdapter().getInstance();
  // await expressApp.listen(port); // to comment before deploy to aws

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

// bootstrap().then(() => { // to comment before deploy to aws
//   console.log('App is running on %s port', port);
// });
