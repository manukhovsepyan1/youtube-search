import { Migration } from '@mikro-orm/migrations';

export class Migration20250528151815 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "history" ("id" varchar(255) not null, "query" varchar(255) not null, "timestamp" date not null, constraint "history_pkey" primary key ("id"));`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "history" cascade;`);
  }

}
