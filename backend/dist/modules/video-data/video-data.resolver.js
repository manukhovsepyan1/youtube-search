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
exports.VideoDataResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cqrs_1 = require("@nestjs/cqrs");
const get_youtube_video_query_1 = require("./queries/get-youtube-video.query");
const search_videos_query_1 = require("./queries/search-videos.query");
const video_search_response_model_1 = require("./dto/video-search-response.model");
const save_history_command_1 = require("../history/commands/impl/save-history.command");
const video_details_model_1 = require("./dto/video-details.model");
let VideoDataResolver = class VideoDataResolver {
    queryBus;
    commandBus;
    constructor(queryBus, commandBus) {
        this.queryBus = queryBus;
        this.commandBus = commandBus;
    }
    async searchVideos(query, pageToken, maxResults) {
        await this.commandBus.execute(new save_history_command_1.SaveHistoryCommand(query));
        return this.queryBus.execute(new search_videos_query_1.SearchVideosQuery(query, pageToken, maxResults));
    }
    async getVideoDetails(videoId) {
        return this.queryBus.execute(new get_youtube_video_query_1.GetYouTubeVideoQuery(videoId));
    }
};
exports.VideoDataResolver = VideoDataResolver;
__decorate([
    (0, graphql_1.Query)(() => video_search_response_model_1.VideoSearchResponseModel),
    __param(0, (0, graphql_1.Args)('query')),
    __param(1, (0, graphql_1.Args)('pageToken', { nullable: true })),
    __param(2, (0, graphql_1.Args)('maxResults', { type: () => graphql_1.Int, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], VideoDataResolver.prototype, "searchVideos", null);
__decorate([
    (0, graphql_1.Query)(() => video_details_model_1.VideoDetailsModel),
    __param(0, (0, graphql_1.Args)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoDataResolver.prototype, "getVideoDetails", null);
exports.VideoDataResolver = VideoDataResolver = __decorate([
    (0, graphql_1.Resolver)(() => video_search_response_model_1.VideoDataModel),
    __metadata("design:paramtypes", [cqrs_1.QueryBus, cqrs_1.CommandBus])
], VideoDataResolver);
//# sourceMappingURL=video-data.resolver.js.map