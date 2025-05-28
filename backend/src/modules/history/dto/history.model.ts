import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class HistoryItem {
  @Field()
  id: string;

  @Field()
  query: string;

  @Field()
  timestamp: Date;
}


@ObjectType()
export class HistoryResponseModel {
  @Field(() => [HistoryItem])
  history: HistoryItem[];
}
