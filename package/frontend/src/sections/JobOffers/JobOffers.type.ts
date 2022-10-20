import ImageI from '../../components/Image/Image.type';

interface JobOffersI {
    title?: string;
    iconTitle?: ImageI;
    jobOffers: {
        id: string;
        title: string;
        jobOffers: {
            salary?: string;
            externalLink: string;
        };
        jobOffersTags: {
            nodes: {
                id: string;
                name: string;
            }[];
        };
    }[];
}

export default JobOffersI;
