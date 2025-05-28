import { Migration } from '@mikro-orm/migrations';

export class Migration20250528172050 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "history" add column "count" int not null default 1;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "history" drop column "count";`);
  }

}
