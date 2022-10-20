import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './Footer.module.scss';
import MainNavbar from '../MainNavbar/MainNavbar';
import { cn } from '../../utils';
import FooterI from './Footer.type';
const Footer = ({}: FooterI) => {
    const [isTurnOff, switchButton] = useState<boolean>(false);
    const dataQ = useStaticQuery(data);
    const items = dataQ.allWpMenuItem.nodes;
    return (
        <footer className={styles.FooterMenu}>
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
        </footer>
    );
};

export default Footer;

const data = graphql`
    query {
        allWpMenuItem(filter: { locations: { eq: FOOTER_MENU } }) {
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
