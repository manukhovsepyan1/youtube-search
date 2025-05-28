import { IQueryHandler } from '@nestjs/cqrs';
import { SearchVideosQuery } from '../queries/search-videos.query';
import { VideoSearchResponseModel } from '../dto/video-search-response.model';
export declare class SearchVideosHandler implements IQueryHandler<SearchVideosQuery> {
    execute(query: SearchVideosQuery): Promise<VideoSearchResponseModel>;
}
