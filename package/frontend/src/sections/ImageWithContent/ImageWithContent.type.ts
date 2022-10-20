import LinkI from '../../types/Link.type';
import ImageI from '../../components/Image/Image.type';

interface ImageWithContentI {
    title: string;
    description: string;
    contentAround?: boolean;
    button?: LinkI;
    image: ImageI;
}

export default ImageWithContentI;
