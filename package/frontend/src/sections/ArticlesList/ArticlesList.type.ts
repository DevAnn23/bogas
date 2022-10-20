import ArticleThumbnailI from '../../components/ArticleThumbnail/ArticleThumbnail.type';
import LinkI from '../../types/Link.type';

interface ArticlesListI {
    subtitle?: string;
    title: string;
    showLatest: boolean;
    numberOfArticles: number;
    buttonTitle: LinkI;
    articlesLatest: ArticleThumbnailI['article'][];
    articlesRelationship: ArticleThumbnailI['article'][];
}

export default ArticlesListI;
