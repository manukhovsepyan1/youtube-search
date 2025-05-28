import { IQueryHandler } from '@nestjs/cqrs';
import { EntityRepository } from '@mikro-orm/core';
import { History } from '../../entities/history.entity';
import { AnalyticsResponseModel } from '../../dto/analytics.model';
import { GetAnalyticsQuery } from '../impl/get-analytics.query';
export declare class GetAnalyticsHandler implements IQueryHandler<GetAnalyticsQuery> {
    private readonly repo;
    constructor(repo: EntityRepository<History>);
    execute(): Promise<AnalyticsResponseModel>;
}
