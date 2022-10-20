import React from 'react';
import { Link } from 'gatsby';
import * as styles from './MainNavbar.module.scss';
import MainNavbarI from './MainNavbarI.type';
import { cn } from '../../utils';
const MainNavbar = ({
    menuItems,
    className
}: MainNavbarI) => {
    const navItems = menuItems.filter((item) => item.parentId === null);
    return (
        <nav className={cn(styles.nav, className)}>
            <div className={styles.inner}>
                <ul className={styles.mainNavbarList}>
                    {navItems.map((item) => (
                        <li className={styles.mainNavbarItem} key={item.databaseId}>
                            <Link
                                className={styles.link}
                                activeClassName={styles.active}
                                to={item.url}
                            >
                                {item.label}
                            </Link>
                            <ul>
                            {item.childItems && item.childItems.nodes.map((subitem) =>
                                <li key={item.databaseId} className={styles.mainNavbarChild}>
                                    <Link to={subitem.url}>
                                        {subitem.label}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default MainNavbar;

const data = graphql`
    query {
        allWpMenu(filter: {locations: {eq: PRIMARY}}) {
            edges {
              node {
                id
                menuItems {
                  nodes {
                    label
                    url
                    parentId
                  }
                }
              }
            }
          }
    }
`;