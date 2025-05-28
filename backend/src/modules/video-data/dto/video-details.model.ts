import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VideoDetailsModel {
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

  @Field(() => Int)
  viewCount: number;

  @Field(() => Int)
  likeCount: number;

  @Field(() => Int)
  commentCount: number;
}
