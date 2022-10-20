import ArticleThumbnailI from '../../components/ArticleThumbnail/ArticleThumbnail.type';
import SocialLinksI from '../../components/SocialLinks/SocialLinks.type';
import TagsListI from '../../components/TagsList/TagsList.type';

interface BlogArchiveI {
    options: {
        socials: SocialLinksI['socialLinks'];
        newsletterDefaultSubtitle: string;
        newsletterDefaultTitle: string;
        newsletterDefaultConsentContent: string;
        newsletterDefaultDescription: string;
        blogArchive: {
            subtitle?: string;
            title: string;
            tagsList: TagsListI['tags']['nodes'];
            newsletterSubtitle?: string;
            newsletterTitle?: string;
            newsletterDescription?: string;
            topStoriesSubtitle: string;
            topStoriesTitle?: string;
            topStories: ArticleThumbnailI['article'][];
        };
    };
    subtitle?: string;
    title?: string;
    articles: ArticleThumbnailI['article'][];
}

export default BlogArchiveI;
