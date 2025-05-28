import { ICommandHandler } from '@nestjs/cqrs';
import { SaveHistoryCommand } from '../impl/save-history.command';
import { EntityManager } from '@mikro-orm/core';
export declare class SaveHistoryHandler implements ICommandHandler<SaveHistoryCommand> {
    private readonly em;
    constructor(em: EntityManager);
    execute(command: SaveHistoryCommand): Promise<void>;
}
