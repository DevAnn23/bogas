import ImageI from '../components/Image/Image.type';

interface TestimonialsPostI {
    testimonials: {
        id: string;
        title: string;
        testimonials: {
            description: string;
            logo: ImageI;
            photo: ImageI;
            position: string;
        };
    }[];
}

export default TestimonialsPostI;
