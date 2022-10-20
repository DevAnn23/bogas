import BoxI from '../../components/Box/Box.types';
import ButtonsListI from '../../components/ButtonsList/ButtonsList.type';
import IconsListI from '../../components/IconsList/IconsList.type';
import VideoThumbnailI from '../../components/VideoThumbnail/VideoThumbnail.type';

interface HeroWithVideoI {
    title: string;
    boxesList: BoxI[];
    linksList: ButtonsListI['list'];
    logosList: IconsListI['list'];
    videoSection: VideoThumbnailI['videoSection'];
}

export default HeroWithVideoI;
