"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250528172050 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250528172050 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table "history" add column "count" int not null default 1;`);
    }
    async down() {
        this.addSql(`alter table "history" drop column "count";`);
    }
}
exports.Migration20250528172050 = Migration20250528172050;
//# sourceMappingURL=Migration20250528172050.js.map