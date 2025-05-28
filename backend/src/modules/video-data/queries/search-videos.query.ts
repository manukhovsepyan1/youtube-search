export class SearchVideosQuery {
  constructor(
    public readonly query: string,
    public readonly pageToken?: string,
    public readonly maxResults?: number,
  ) {}
}
