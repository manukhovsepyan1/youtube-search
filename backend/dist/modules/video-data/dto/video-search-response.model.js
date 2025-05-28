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
exports.VideoSearchResponseModel = exports.VideoDataModel = void 0;
const graphql_1 = require("@nestjs/graphql");
let VideoDataModel = class VideoDataModel {
    videoId;
    title;
    description;
    thumbnailUrl;
    publishedAt;
};
exports.VideoDataModel = VideoDataModel;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDataModel.prototype, "videoId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDataModel.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDataModel.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDataModel.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], VideoDataModel.prototype, "publishedAt", void 0);
exports.VideoDataModel = VideoDataModel = __decorate([
    (0, graphql_1.ObjectType)()
], VideoDataModel);
let VideoSearchResponseModel = class VideoSearchResponseModel {
    results;
    totalResults;
    nextPageToken;
    prevPageToken;
};
exports.VideoSearchResponseModel = VideoSearchResponseModel;
__decorate([
    (0, graphql_1.Field)(() => [VideoDataModel]),
    __metadata("design:type", Array)
], VideoSearchResponseModel.prototype, "results", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], VideoSearchResponseModel.prototype, "totalResults", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], VideoSearchResponseModel.prototype, "nextPageToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], VideoSearchResponseModel.prototype, "prevPageToken", void 0);
exports.VideoSearchResponseModel = VideoSearchResponseModel = __decorate([
    (0, graphql_1.ObjectType)()
], VideoSearchResponseModel);
//# sourceMappingURL=video-search-response.model.js.map