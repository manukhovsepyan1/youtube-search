import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetYouTubeVideoQuery } from './queries/get-youtube-video.query';
import { SearchVideosQuery } from './queries/search-videos.query';
import {
  VideoSearchResponseModel,
  VideoDataModel,
} from './dto/video-search-response.model';
import { SaveHistoryCommand } from '../history/commands/impl/save-history.command';
import { VideoDetailsModel } from './dto/video-details.model';

@Resolver(() => VideoDataModel)
export class VideoDataResolver {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  @Query(() => VideoSearchResponseModel)
  async searchVideos(
    @Args('query') query: string,
    @Args('pageToken', { nullable: true }) pageToken?: string,
    @Args('maxResults', { type: () => Int, nullable: true })
    maxResults?: number,
  ): Promise<VideoSearchResponseModel> {
    await this.commandBus.execute(new SaveHistoryCommand(query));
    return this.queryBus.execute(
      new SearchVideosQuery(query, pageToken, maxResults),
    );
  }

  @Query(() => VideoDetailsModel)
  async getVideoDetails(
    @Args('videoId') videoId: string,
  ): Promise<VideoDetailsModel> {
    return this.queryBus.execute(new GetYouTubeVideoQuery(videoId));
  }
}
