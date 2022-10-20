import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './Header.module.scss';
import MainNavbar from '../MainNavbar/MainNavbar';
import Lettersbackground from '../Animations/LettersBackground/LettersBackground';
import { cn } from '../../utils';
import HeaderI from './HeaderI.type';
const Header = ({}: HeaderI) => {
    const [isTurnOff, switchButton] = useState<boolean>(false);
    const dataQ = useStaticQuery(data);
    const items = dataQ.allWpMenuItem.nodes;
    return (
        <header className={styles.headerMenu}>
            <div className={styles.gridLogo}>
                <Lettersbackground
                    text={'Hello'}
                    className={styles.animationsHome}
                />
            </div>
            <div className={styles.gridMenu}>
                <MainNavbar
                    menuItems={items}
                    className={isTurnOff ? styles.openMenu : styles.closeMenu}
                />
                <button
                    onClick={() => {
                        switchButton(!isTurnOff);
                    }}
                    className={cn(
                        styles.burgerMenu,
                        isTurnOff
                            ? styles.burgerMenuOpen
                            : styles.burgerMenuClose
                    )}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;

const data = graphql`
    query {
        allWpMenuItem(filter: { locations: { eq: MAIN_MENU } }) {
            nodes {
                url
                path
                label
                databaseId
                childItems {
                    nodes {
                        label
                        parentId
                    }
                }
                parentId
            }
        }
    }
`;
