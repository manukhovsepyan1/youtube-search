"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetYouTubeVideoHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const axios_1 = require("axios");
const get_youtube_video_query_1 = require("../queries/get-youtube-video.query");
let GetYouTubeVideoHandler = class GetYouTubeVideoHandler {
    async execute(query) {
        const { videoId } = query;
        const apiKey = process.env.YOUTUBE_API_KEY;
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;
        const response = await axios_1.default.get(url);
        const { items } = response.data;
        if (!items || items.length === 0) {
            throw new Error('Video not found');
        }
        const video = items[0];
        const snippet = video.snippet;
        const statistics = video.statistics;
        return {
            videoId,
            title: snippet.title,
            description: snippet.description,
            thumbnailUrl: snippet.thumbnails?.default?.url || '',
            publishedAt: snippet.publishedAt,
            viewCount: parseInt(statistics.viewCount) || 0,
            likeCount: parseInt(statistics.likeCount) || 0,
            commentCount: parseInt(statistics.commentCount) || 0
        };
    }
};
exports.GetYouTubeVideoHandler = GetYouTubeVideoHandler;
exports.GetYouTubeVideoHandler = GetYouTubeVideoHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_youtube_video_query_1.GetYouTubeVideoQuery)
], GetYouTubeVideoHandler);
//# sourceMappingURL=get-youtube-video.handler.js.map