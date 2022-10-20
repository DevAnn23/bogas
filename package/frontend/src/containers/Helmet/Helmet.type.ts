import ImageI from '../../components/Image/Image.type';

interface HelmetI {
    title: string;
    thumbnail?: {
        node: ImageI;
    };
}

export default HelmetI;
