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
exports.VideoDetailsModel = void 0;
const graphql_1 = require("@nestjs/graphql");
let VideoDetailsModel = class VideoDetailsModel {
    videoId;
    title;
    description;
    thumbnailUrl;
    publishedAt;
    viewCount;
    likeCount;
    commentCount;
};
exports.VideoDetailsModel = VideoDetailsModel;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDetailsModel.prototype, "videoId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDetailsModel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDetailsModel.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDetailsModel.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDetailsModel.prototype, "publishedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], VideoDetailsModel.prototype, "viewCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], VideoDetailsModel.prototype, "likeCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], VideoDetailsModel.prototype, "commentCount", void 0);
exports.VideoDetailsModel = VideoDetailsModel = __decorate([
    (0, graphql_1.ObjectType)()
], VideoDetailsModel);
//# sourceMappingURL=video-details.model.js.map