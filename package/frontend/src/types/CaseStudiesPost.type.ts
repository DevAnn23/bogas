import ImageI from '../components/Image/Image.type';
import TagsListI from '../components/TagsList/TagsList.type';

interface CaseStudiesPostI {
    id: string;
    title: string;
    featuredImage: {
        node: ImageI;
    };
    caseStudies: {
        description: string;
    };
    caseStudiesTags: TagsListI['tags'];
}

export default CaseStudiesPostI;
