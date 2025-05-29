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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHistoryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const nestjs_1 = require("@mikro-orm/nestjs");
const core_1 = require("@mikro-orm/core");
const history_entity_1 = require("../../entities/history.entity");
const get_history_query_1 = require("../impl/get-history.query");
let GetHistoryHandler = class GetHistoryHandler {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute() {
        const historyItems = await this.repo.findAll({ orderBy: { timestamp: 'DESC' } });
        return {
            history: historyItems,
        };
    }
};
exports.GetHistoryHandler = GetHistoryHandler;
exports.GetHistoryHandler = GetHistoryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_history_query_1.GetHistoryQuery),
    __param(0, (0, nestjs_1.InjectRepository)(history_entity_1.History)),
    __metadata("design:paramtypes", [core_1.EntityRepository])
], GetHistoryHandler);
//# sourceMappingURL=get-history.handler.js.map