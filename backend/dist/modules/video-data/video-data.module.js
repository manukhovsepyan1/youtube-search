"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoDataModule = void 0;
const common_1 = require("@nestjs/common");
const video_data_resolver_1 = require("./video-data.resolver");
const get_youtube_video_handler_1 = require("./handlers/get-youtube-video.handler");
const search_videos_handler_1 = require("./handlers/search-videos.handler");
const history_module_1 = require("../history/history.module");
let VideoDataModule = class VideoDataModule {
};
exports.VideoDataModule = VideoDataModule;
exports.VideoDataModule = VideoDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            history_module_1.HistoryModule,
        ],
        providers: [video_data_resolver_1.VideoDataResolver, get_youtube_video_handler_1.GetYouTubeVideoHandler, search_videos_handler_1.SearchVideosHandler,],
    })
], VideoDataModule);
//# sourceMappingURL=video-data.module.js.map