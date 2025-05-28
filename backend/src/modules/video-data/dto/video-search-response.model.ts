import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VideoDataModel {
  @Field()
  videoId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  publishedAt: string;
}

@ObjectType()
export class VideoSearchResponseModel {
  @Field(() => [VideoDataModel])
  results: VideoDataModel[];

  @Field(() => Int)
  totalResults: number;

  @Field(() => String, { nullable: true })
  nextPageToken: string | null;

  @Field(() => String, { nullable: true })
  prevPageToken: string | null;
}
