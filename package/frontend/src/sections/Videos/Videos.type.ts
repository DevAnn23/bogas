import ImageI from '../../components/Image/Image.type';
import VideoThumbnailI from '../../components/VideoThumbnail/VideoThumbnail.type';
import LinkI from '../../types/Link.type';

interface VideosI {
    subtitle?: string;
    title: string;
    buttonIcon: ImageI;
    buttonTitle: LinkI;
    videos: VideoThumbnailI['videoPost'][];
}

export default VideosI;
