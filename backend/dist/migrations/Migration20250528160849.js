"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250528160849 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250528160849 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table "history" rename column "timestamp" to "searched_at";`);
    }
    async down() {
        this.addSql(`alter table "history" rename column "searched_at" to "timestamp";`);
    }
}
exports.Migration20250528160849 = Migration20250528160849;
//# sourceMappingURL=Migration20250528160849.js.map