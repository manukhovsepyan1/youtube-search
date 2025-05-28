export declare class VideoDataModel {
    videoId: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    publishedAt: string;
}
export declare class VideoSearchResponseModel {
    results: VideoDataModel[];
    totalResults: number;
    nextPageToken: string | null;
    prevPageToken: string | null;
}
