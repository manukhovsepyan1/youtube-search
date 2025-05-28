"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHistoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cqrs_1 = require("@nestjs/cqrs");
const history_model_1 = require("./dto/history.model");
const get_history_query_1 = require("./queries/impl/get-history.query");
const analytics_model_1 = require("./dto/analytics.model");
const get_analytics_query_1 = require("./queries/impl/get-analytics.query");
let SearchHistoryResolver = class SearchHistoryResolver {
    queryBus;
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    async getSearchHistory() {
        return this.queryBus.execute(new get_history_query_1.GetHistoryQuery());
    }
    async getSearchAnalytics() {
        return this.queryBus.execute(new get_analytics_query_1.GetAnalyticsQuery());
    }
};
exports.SearchHistoryResolver = SearchHistoryResolver;
__decorate([
    (0, graphql_1.Query)(() => history_model_1.HistoryResponseModel),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchHistoryResolver.prototype, "getSearchHistory", null);
__decorate([
    (0, graphql_1.Query)(() => analytics_model_1.AnalyticsResponseModel),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchHistoryResolver.prototype, "getSearchAnalytics", null);
exports.SearchHistoryResolver = SearchHistoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _a : Object])
], SearchHistoryResolver);
//# sourceMappingURL=history.resolver.js.map