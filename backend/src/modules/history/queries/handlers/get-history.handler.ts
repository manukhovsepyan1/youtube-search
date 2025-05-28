import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { History } from '../../entities/history.entity';
import { GetHistoryQuery } from '../impl/get-history.query';
import { HistoryResponseModel } from '../../dto/history.model';
import { AnalyticsResponseModel } from '../../dto/analytics.model';

@QueryHandler(GetHistoryQuery)
export class GetHistoryHandler implements IQueryHandler<GetHistoryQuery> {
  constructor(
    @InjectRepository(History)
    private readonly repo: EntityRepository<History>,
  ) {}

  async execute(): Promise<HistoryResponseModel> {
    const historyItems = await this.repo.findAll({ orderBy: { timestamp: 'DESC' } });
    return {
      history: historyItems,
    };
  }
}