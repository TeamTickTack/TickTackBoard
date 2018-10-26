import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as express from 'express';
import { Express } from 'express';

async function bootstrap() {
    // if running on iis -> the port is passed through the env var PORT
    const port = process.env.PORT || 3000;
    const expressApp = express();

    const app = await NestFactory.create(AppModule, expressApp);

    // add angular client delivery
    addAngularClientDelivery(expressApp);
    await app.listen(3000);
    console.log(`tool is running on port: ${port}`);
}
bootstrap();

function addAngularClientDelivery(expressApp: Express) {
  // provide whole angular dist-dir
  expressApp.use(express.static(path.join(process.cwd(), 'src/client-dist')));
  // return index.html for all routes which are not defined
  expressApp.get('*', (req, res, next) => {
      // deliver angular client if url does not contain /api
      if (!req.path.startsWith('/api')) {
          res.sendFile(path.join(process.cwd(), 'src/client-dist/index.html'));
      } else {
          next();
      }
  });
}