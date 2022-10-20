import ButtonsListI from '../../components/ButtonsList/ButtonsList.type';
import ImageI from '../../components/Image/Image.type';
import IconsListI from '../../components/IconsList/IconsList.type';

interface HeroPrimaryI {
    options: {
        heroPrimaryDefaultBackground: ImageI;
    };
    subtitle?: string;
    title: string;
    linksList: ButtonsListI['list'];
    logosList: IconsListI['list'];
}

export default HeroPrimaryI;
