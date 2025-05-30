import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { VideoDataModule } from './modules/video-data/video-data.module';
import config from './mikro-orm.config';
import { CqrsModule } from '@nestjs/cqrs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HistoryModule } from './modules/history/history.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    MikroOrmModule.forRoot(config),
    VideoDataModule,
    HistoryModule,
  ],
})
export class AppModule {}
