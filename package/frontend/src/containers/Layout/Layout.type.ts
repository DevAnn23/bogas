import { ReactNode, ReactNodeArray } from 'react';
import HeaderNavigationI from '../Header/HeaderNavigation/HeaderNavigation.type';
interface ImageI {
    altText: string;
    className?: string;
}
interface LayoutI {
    children: ReactNodeArray | ReactNode;
    mainMenu: {
        nodes: HeaderNavigationI['menuItems'];
    };
    countJobOffers: number;
    title: string;
    thumbnail?: {
        node: ImageI;
    };
}

export default LayoutI;
