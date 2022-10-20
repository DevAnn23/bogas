import ImageI from '../../components/Image/Image.type';
import LinkI from '../../types/Link.type';
import TestimonialsPostI from '../../types/TestimonialsPost.type';

interface TestimonialsI {
    options: {
        testimonialsDefaultSubtitle: string;
        testimonialsDefaultTitle: string;
        testimonialsLink: LinkI;
        testimonialsDefaultLogosList: {
            logo: ImageI;
        }[];
    };
    subtitle?: string;
    title?: string;
    showAll: boolean;
    testimonials: TestimonialsPostI['testimonials'];
    testimonialsRelationship: TestimonialsPostI['testimonials'];
    logosList: {
        logo: ImageI;
    }[];
}

export default TestimonialsI;
