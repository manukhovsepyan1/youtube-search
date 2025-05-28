import { QueryBus } from '@nestjs/cqrs';
import { HistoryResponseModel } from './dto/history.model';
import { AnalyticsResponseModel } from './dto/analytics.model';
export declare class SearchHistoryResolver {
    private readonly queryBus;
    constructor(queryBus: QueryBus);
    getSearchHistory(): Promise<HistoryResponseModel>;
    getSearchAnalytics(): Promise<AnalyticsResponseModel>;
}
