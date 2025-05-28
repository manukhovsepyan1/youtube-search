import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SaveHistoryCommand } from '../impl/save-history.command';
import { EntityManager } from '@mikro-orm/core';
import { History } from '../../entities/history.entity';

@CommandHandler(SaveHistoryCommand)
export class SaveHistoryHandler implements ICommandHandler<SaveHistoryCommand> {
  constructor(
    private readonly em: EntityManager,
  ) {}

  async execute(command: SaveHistoryCommand): Promise<void> {
    const existingHistory = await this.em.findOne(History, { query: command.query });
    
    if (existingHistory) {
      existingHistory.count += 1;
      existingHistory.timestamp = new Date();
      await this.em.persistAndFlush(existingHistory);
    } else {
      const history = new History();
      history.query = command.query;
      await this.em.persistAndFlush(history);
    }
  }
}