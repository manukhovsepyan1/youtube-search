import { Module } from '@nestjs/common';
import { VideoDataResolver } from './video-data.resolver';
import { GetYouTubeVideoHandler } from './handlers/get-youtube-video.handler';
import { SearchVideosHandler } from './handlers/search-videos.handler';
import { HistoryModule } from '../history/history.module';

@Module({
  imports: [
    HistoryModule,
  ],
  providers: [VideoDataResolver, GetYouTubeVideoHandler, SearchVideosHandler, ],
})
export class VideoDataModule {}
