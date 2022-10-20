import ImageI from '../../components/Image/Image.type';

interface GalleryI {
    subtitle?: string;
    title?: string;
    hasBackground: boolean;
    imagesList: {
        image: ImageI;
    }[];
}

export default GalleryI;
