export declare class SearchVideosQuery {
    readonly query: string;
    readonly pageToken?: string | undefined;
    readonly maxResults?: number | undefined;
    constructor(query: string, pageToken?: string | undefined, maxResults?: number | undefined);
}
