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
exports.History = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
let History = class History {
    id = (0, uuid_1.v4)();
    query;
    timestamp = new Date();
    count = 1;
};
exports.History = History;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], History.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], History.prototype, "query", void 0);
__decorate([
    (0, core_1.Property)({ type: 'date' }),
    __metadata("design:type", Date)
], History.prototype, "timestamp", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], History.prototype, "count", void 0);
exports.History = History = __decorate([
    (0, core_1.Entity)()
], History);
//# sourceMappingURL=history.entity.js.map