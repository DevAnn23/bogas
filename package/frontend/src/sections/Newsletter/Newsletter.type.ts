import ImageI from '../../components/Image/Image.type';

interface NewsletterI {
    options: {
        newsletterDefaultSubtitle: string;
        newsletterDefaultTitle: string;
        newsletterDefaultDescription: string;
        newsletterDefaultConsentContent: string;
        newsletterDefaultBackground: ImageI;
    };
    mailchimpListEndpoint?: string;
    subtitle?: string;
    title?: string;
    description?: string;
    consentContent?: string;
    background?: ImageI;
    containerPost?: boolean;
}

export default NewsletterI;
