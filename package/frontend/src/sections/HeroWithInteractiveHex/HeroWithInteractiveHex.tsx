import React from 'react';

import * as styles from './HeroWithInteractiveHex.module.scss';
import HeroWithInteractiveHexI from './HeroWithInteractiveHex.type';
import Title from '../../components/Title/Title';
import ButtonsList from '../../components/ButtonsList/ButtonsList';
import Box from '../../components/Box/Box';
import IconsList from '../../components/IconsList/IconsList';
import HexHero from '../../components/HexHero/HexHero';
import { cn } from '../../utils';

const HeroWithInteractiveHex = ({
    title,
    boxesList,
    linksList,
    logosList,
    hexIcons,
}: HeroWithInteractiveHexI) => {
    return (
        <section className={styles.section}>
            <div className={styles.top}>
                <div className={styles.topInner}>
                    <div className={cn('container', styles.container)}>
                        <div className={styles.left}>
                            <Title
                                className={styles.title}
                                title={title}
                                level={'h1'}
                            />
                            <ButtonsList
                                className={styles.linksList}
                                list={linksList}
                            />
                            <ul className={styles.boxesList}>
                                {boxesList.map((box, index) =>
                                    box.link ? (
                                        <a
                                            key={box.title + index}
                                            className={styles.box}
                                            href={box.link.url}
                                            {...(box.link.target && {
                                                target: '_blank',
                                            })}
                                        >
                                            <Box
                                                title={box.title}
                                                description={box.description}
                                                icon={box.icon}
                                            />
                                        </a>
                                    ) : (
                                        <li
                                            key={box.title + index}
                                            className={styles.box}
                                        >
                                            <Box
                                                title={box.title}
                                                description={box.description}
                                                icon={box.icon}
                                            />
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className={styles.right}>
                            <HexHero hexIcons={hexIcons} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={'container'}>
                    <IconsList
                        className={styles.logosList}
                        list={logosList}
                        isFirstSeparate={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroWithInteractiveHex;
