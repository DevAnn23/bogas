import ButtonsListI from '../../components/ButtonsList/ButtonsList.type';
import IconsListI from '../../components/IconsList/IconsList.type';
import ImageI from '../../components/Image/Image.type';
import StatsListI from '../../components/StatsList/StatsList.type';

interface HeroWithImagesAndListsI {
    subtitle?: string;
    title: string;
    linksList: ButtonsListI['list'];
    statsList: StatsListI['list'];
    iconsList: IconsListI['list'];
    imageTopLeft: ImageI;
    imageTopRight: ImageI;
    imageBottomLeft: ImageI;
    imageBottomRight: ImageI;
}

export default HeroWithImagesAndListsI;
