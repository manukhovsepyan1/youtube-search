import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { History } from '../../entities/history.entity';
import { AnalyticsResponseModel } from '../../dto/analytics.model';
import { GetAnalyticsQuery } from '../impl/get-analytics.query';

@QueryHandler(GetAnalyticsQuery)
export class GetAnalyticsHandler implements IQueryHandler<GetAnalyticsQuery> {
  constructor(
    @InjectRepository(History)
    private readonly repo: EntityRepository<History>,
  ) {}

  async execute(): Promise<AnalyticsResponseModel> {
    const analyticsItems = await this.repo.findAll({ orderBy: { count: 'DESC' } });
    return {
      analytics: analyticsItems,
    };
  }
}