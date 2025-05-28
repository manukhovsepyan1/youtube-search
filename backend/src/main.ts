import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MikroORM,  RequestContext } from '@mikro-orm/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const orm = app.get(MikroORM);
  // app.use((req, res, next) => {
  //   RequestContext.create(orm.em, next);
  // });
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
