import IconsListWithTitleI from '../../components/IconsListWithTitle/IconsListWithTitle.type';

interface IconsWithContentI {
    title: string;
    description: string;
    iconsList: IconsListWithTitleI['list'];
}

export default IconsWithContentI;
