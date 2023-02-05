import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'
import { graphqlUploadExpress } from 'graphql-upload-ts'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe())
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }))

  await app.listen(8080, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
