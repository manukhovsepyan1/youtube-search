import { Migration } from '@mikro-orm/migrations';

export class Migration20250528160849 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "history" rename column "timestamp" to "searched_at";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "history" rename column "searched_at" to "timestamp";`);
  }

}
