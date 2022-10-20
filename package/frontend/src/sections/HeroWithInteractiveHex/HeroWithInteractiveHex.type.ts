import ButtonsListI from '../../components/ButtonsList/ButtonsList.type';
import BoxI from '../../components/Box/Box.types';
import IconsListI from '../../components/IconsList/IconsList.type';
import ImageI from '../../components/Image/Image.type';

interface HeroWithInteractiveHexI {
    title: string;
    boxesList: BoxI[];
    linksList: ButtonsListI['list'];
    logosList: IconsListI['list'];
    hexIcons: {
        energy: {
            top: ImageI;
            left: ImageI;
            right: ImageI;
        };
        logistics: {
            left: ImageI;
            right: ImageI;
            bottom: ImageI;
        };
        biodiversity: {
            left: ImageI;
            right: ImageI;
            bottom: ImageI;
        };
        finance: {
            top: ImageI;
            left: ImageI;
            right: ImageI;
        };
        maritime: {
            top: ImageI;
            left: ImageI;
            right: ImageI;
        };
        pharma: {
            left: ImageI;
            right: ImageI;
            bottom: ImageI;
        };
    };
}

export default HeroWithInteractiveHexI;
