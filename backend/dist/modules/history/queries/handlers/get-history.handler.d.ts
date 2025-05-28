import { IQueryHandler } from '@nestjs/cqrs';
import { EntityRepository } from '@mikro-orm/core';
import { History } from '../../entities/history.entity';
import { GetHistoryQuery } from '../impl/get-history.query';
import { HistoryResponseModel } from '../../dto/history.model';
export declare class GetHistoryHandler implements IQueryHandler<GetHistoryQuery> {
    private readonly repo;
    constructor(repo: EntityRepository<History>);
    execute(): Promise<HistoryResponseModel>;
}
