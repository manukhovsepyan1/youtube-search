"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const nestjs_1 = require("@mikro-orm/nestjs");
const video_data_module_1 = require("./modules/video-data/video-data.module");
const mikro_orm_config_1 = require("./mikro-orm.config");
const cqrs_1 = require("@nestjs/cqrs");
const apollo_1 = require("@nestjs/apollo");
const history_module_1 = require("./modules/history/history.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
            }),
            nestjs_1.MikroOrmModule.forRoot(mikro_orm_config_1.default),
            video_data_module_1.VideoDataModule,
            history_module_1.HistoryModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map