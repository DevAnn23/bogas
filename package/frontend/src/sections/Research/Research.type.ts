import MediaOrResearchThumbnailI from '../../components/MediaOrResearchThumbnail/MediaOrResearchThumbnail.type';

interface ResearchI {
    options: {
        researchDefaultSubtitle: string;
        researchDefaultTitle: string;
    };
    subtitle?: string;
    title?: string;
    showLatest: boolean;
    numberOfElements: number;
    researchLatest: MediaOrResearchThumbnailI['article'][];
    researchOrPostRelationship: MediaOrResearchThumbnailI['article'][];
}

export default ResearchI;
