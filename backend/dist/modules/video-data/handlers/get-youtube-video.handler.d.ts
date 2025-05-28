import { IQueryHandler } from '@nestjs/cqrs';
import { GetYouTubeVideoQuery } from '../queries/get-youtube-video.query';
import { VideoDetailsModel } from '../dto/video-details.model';
export declare class GetYouTubeVideoHandler implements IQueryHandler<GetYouTubeVideoQuery> {
    execute(query: GetYouTubeVideoQuery): Promise<VideoDetailsModel>;
}
