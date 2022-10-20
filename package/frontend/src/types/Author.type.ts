import ImageI from '../components/Image/Image.type';

interface AuthorI {
    id: string;
    firstName: string;
    lastName: string;
    uri?: string;
    author: {
        img: ImageI;
        linkedin: string;
        twitter: string;
        position: string;
        testimonial: string;
        place: string;
        placeIcon: ImageI;
    };
}

export default AuthorI;
