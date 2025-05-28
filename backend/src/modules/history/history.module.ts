import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CqrsModule } from '@nestjs/cqrs';
import { History } from './entities/history.entity';
import { SaveHistoryHandler } from './commands/handlers/save-history.handler';
import { GetHistoryHandler } from './queries/handlers/get-history.handler';
import { SearchHistoryResolver } from './history.resolver';
import { GetAnalyticsHandler } from './queries/handlers/get-analytics.handler';

@Module({
  imports: [MikroOrmModule.forFeature([History]), CqrsModule],
  providers: [
    SearchHistoryResolver,
    SaveHistoryHandler,
    GetHistoryHandler,
    GetAnalyticsHandler,
  ],
  exports: [CqrsModule], // So other modules (like Video) can use the command/query bus
})
export class HistoryModule {}
