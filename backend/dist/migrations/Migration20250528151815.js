"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250528151815 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250528151815 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table "history" ("id" varchar(255) not null, "query" varchar(255) not null, "timestamp" date not null, constraint "history_pkey" primary key ("id"));`);
    }
    async down() {
        this.addSql(`drop table if exists "history" cascade;`);
    }
}
exports.Migration20250528151815 = Migration20250528151815;
//# sourceMappingURL=Migration20250528151815.js.map