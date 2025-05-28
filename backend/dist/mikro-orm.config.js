"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@mikro-orm/postgresql");
const history_entity_1 = require("./modules/history/entities/history.entity");
const config = {
    dbName: 'postgres',
    user: 'postgres',
    password: '969696',
    host: 'localhost',
    port: 5432,
    driver: postgresql_1.PostgreSqlDriver,
    debug: true,
    entities: [history_entity_1.History],
    entitiesTs: [history_entity_1.History],
    migrations: {
        path: 'dist/migrations',
        pathTs: 'src/migrations',
    },
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map