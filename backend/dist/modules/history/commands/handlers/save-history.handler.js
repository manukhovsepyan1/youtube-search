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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveHistoryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const save_history_command_1 = require("../impl/save-history.command");
const core_1 = require("@mikro-orm/core");
const history_entity_1 = require("../../entities/history.entity");
let SaveHistoryHandler = class SaveHistoryHandler {
    em;
    constructor(em) {
        this.em = em;
    }
    async execute(command) {
        const existingHistory = await this.em.findOne(history_entity_1.History, { query: command.query });
        if (existingHistory) {
            existingHistory.count += 1;
            existingHistory.timestamp = new Date();
            await this.em.persistAndFlush(existingHistory);
        }
        else {
            const history = new history_entity_1.History();
            history.query = command.query;
            await this.em.persistAndFlush(history);
        }
    }
};
exports.SaveHistoryHandler = SaveHistoryHandler;
exports.SaveHistoryHandler = SaveHistoryHandler = __decorate([
    (0, cqrs_1.CommandHandler)(save_history_command_1.SaveHistoryCommand),
    __metadata("design:paramtypes", [core_1.EntityManager])
], SaveHistoryHandler);
//# sourceMappingURL=save-history.handler.js.map