import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express'
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import helmet from 'helmet';

let server: Handler;

const port = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('test')
  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());

  // await app.listen(port);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
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
