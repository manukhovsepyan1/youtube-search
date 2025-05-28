import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AnalyticsItem {
  @Field()
  id: string;

  @Field()
  query: string;

  @Field()
  count: number;
}

@ObjectType()
export class AnalyticsResponseModel {
  @Field(() => [AnalyticsItem])
  analytics: AnalyticsItem[];
}