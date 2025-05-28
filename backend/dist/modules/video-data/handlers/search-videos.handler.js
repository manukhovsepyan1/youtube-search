"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchVideosHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const search_videos_query_1 = require("../queries/search-videos.query");
const axios_1 = require("axios");
let SearchVideosHandler = class SearchVideosHandler {
    async execute(query) {
        const { query: searchTerm, pageToken, maxResults = 10 } = query;
        const apiKey = 'AIzaSyBdZPM2wiEGkXJGk7SMyYbTmiFGNs_IQXw';
        if (!apiKey) {
            throw new Error('YouTube API key is not configured');
        }
        const response = await axios_1.default.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: apiKey,
                q: searchTerm,
                part: 'snippet',
                type: 'video',
                maxResults,
                pageToken,
            },
        });
        const data = response.data;
        const items = data.items || [];
        return {
            results: items.map((item) => ({
                videoId: item.id.videoId || '',
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.default?.url || '',
                publishedAt: item.snippet.publishedAt,
            })),
            totalResults: data.pageInfo.totalResults,
            nextPageToken: data.nextPageToken || null,
            prevPageToken: data.prevPageToken || null,
        };
    }
};
exports.SearchVideosHandler = SearchVideosHandler;
exports.SearchVideosHandler = SearchVideosHandler = __decorate([
    (0, cqrs_1.QueryHandler)(search_videos_query_1.SearchVideosQuery)
], SearchVideosHandler);
//# sourceMappingURL=search-videos.handler.js.map