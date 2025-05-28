import { Resolver, Query } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { HistoryResponseModel } from './dto/history.model';
import { GetHistoryQuery } from './queries/impl/get-history.query';
import { AnalyticsResponseModel } from './dto/analytics.model';
import { GetAnalyticsQuery } from './queries/impl/get-analytics.query';

@Resolver()
export class SearchHistoryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => HistoryResponseModel)
  async getSearchHistory(): Promise<HistoryResponseModel> {
    return this.queryBus.execute(new GetHistoryQuery());
  }

  @Query(() => AnalyticsResponseModel)
  async getSearchAnalytics(): Promise<AnalyticsResponseModel> {
    return this.queryBus.execute(new GetAnalyticsQuery());
  }
}