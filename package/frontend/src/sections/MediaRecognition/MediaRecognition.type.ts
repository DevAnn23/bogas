import MediaOrResearchThumbnailI from '../../components/MediaOrResearchThumbnail/MediaOrResearchThumbnail.type';

interface MediaRecognitionI {
    title: string;
    description: string;
    showLatest: boolean;
    numberOfElements?: number;
    mediaRecognitionLatest: MediaOrResearchThumbnailI['article'][];
    mediaRecognitionRelationship: MediaOrResearchThumbnailI['article'][];
}

export default MediaRecognitionI;
