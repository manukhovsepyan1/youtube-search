import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { VideoSearchResponseModel } from './dto/video-search-response.model';
import { VideoDetailsModel } from './dto/video-details.model';
export declare class VideoDataResolver {
    private queryBus;
    private commandBus;
    constructor(queryBus: QueryBus, commandBus: CommandBus);
    searchVideos(query: string, pageToken?: string, maxResults?: number): Promise<VideoSearchResponseModel>;
    getVideoDetails(videoId: string): Promise<VideoDetailsModel>;
}
