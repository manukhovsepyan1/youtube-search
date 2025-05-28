"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchVideosQuery = void 0;
class SearchVideosQuery {
    query;
    pageToken;
    maxResults;
    constructor(query, pageToken, maxResults) {
        this.query = query;
        this.pageToken = pageToken;
        this.maxResults = maxResults;
    }
}
exports.SearchVideosQuery = SearchVideosQuery;
//# sourceMappingURL=search-videos.query.js.map