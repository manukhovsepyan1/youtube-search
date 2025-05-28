"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@mikro-orm/nestjs");
const cqrs_1 = require("@nestjs/cqrs");
const history_entity_1 = require("./entities/history.entity");
const save_history_handler_1 = require("./commands/handlers/save-history.handler");
const get_history_handler_1 = require("./queries/handlers/get-history.handler");
const history_resolver_1 = require("./history.resolver");
const get_analytics_handler_1 = require("./queries/handlers/get-analytics.handler");
let HistoryModule = class HistoryModule {
};
exports.HistoryModule = HistoryModule;
exports.HistoryModule = HistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_1.MikroOrmModule.forFeature([history_entity_1.History]), cqrs_1.CqrsModule],
        providers: [
            history_resolver_1.SearchHistoryResolver,
            save_history_handler_1.SaveHistoryHandler,
            get_history_handler_1.GetHistoryHandler,
            get_analytics_handler_1.GetAnalyticsHandler,
        ],
        exports: [cqrs_1.CqrsModule],
    })
], HistoryModule);
//# sourceMappingURL=history.module.js.map