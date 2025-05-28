"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250528162835 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250528162835 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table "history" rename column "searched_at" to "timestamp";`);
    }
    async down() {
        this.addSql(`alter table "history" rename column "timestamp" to "searched_at";`);
    }
}
exports.Migration20250528162835 = Migration20250528162835;
//# sourceMappingURL=Migration20250528162835.js.map