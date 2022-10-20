import CaseStudiesPostI from '../../types/CaseStudiesPost.type';
import LinkI from '../../types/Link.type';

interface CaseStudiesI {
    options: {
        caseStudiesDefaultSubtitle: string;
        caseStudiesDefaultTitle: string;
    };
    subtitle?: string;
    title?: string;
    showLatest: boolean;
    numberOfElements: number;
    buttonTitle: LinkI;
    caseStudiesLatest: CaseStudiesPostI[];
    caseStudiesRelationship: CaseStudiesPostI[];
}

export default CaseStudiesI;
