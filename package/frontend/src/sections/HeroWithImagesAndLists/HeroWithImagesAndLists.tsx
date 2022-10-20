import React from 'react';

import * as styles from './HeroWithImagesAndLists.module.scss';
import HeroWithImagesAndListsI from './HeroWithImagesAndLists.type';
import Title from '../../components/Title/Title';
import ButtonsList from '../../components/ButtonsList/ButtonsList';
import IconsList from '../../components/IconsList/IconsList';
import StatsList from '../../components/StatsList/StatsList';
import Image from '../../components/Image/Image';

const HeroWithImagesAndLists = ({
    subtitle,
    title,
    linksList,
    statsList,
    iconsList,
    imageTopLeft,
    imageTopRight,
    imageBottomLeft,
    imageBottomRight,
}: HeroWithImagesAndListsI) => {
    return (
        <section className={styles.section}>
            <div className={'container'}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <Title title={title} subtitle={subtitle} level={'h1'} />

                        {linksList && (
                            <ButtonsList
                                className={styles.linksList}
                                list={linksList}
                            />
                        )}

                        {statsList && (
                            <StatsList
                                list={statsList}
                                className={styles.statsList}
                            />
                        )}

                        {iconsList && (
                            <IconsList
                                className={styles.iconsList}
                                list={iconsList}
                            />
                        )}
                    </div>
                    <div>
                        <div className={styles.imageTopLeftWrapper}>
                            <Image
                                localFile={imageTopLeft.localFile}
                                altText={imageTopLeft.altText}
                            />
                        </div>
                        <div className={styles.imageTopRightWrapper}>
                            <Image
                                localFile={imageTopRight.localFile}
                                altText={imageTopRight.altText}
                                className={styles.imageTopRight}
                            />
                        </div>
                        <div className={styles.imageBottomLeftWrapper}>
                            <Image
                                localFile={imageBottomLeft.localFile}
                                altText={imageBottomLeft.altText}
                                className={styles.imageBottomLeft}
                            />
                        </div>
                        <div className={styles.imageBottomRightWrapper}>
                            <Image
                                localFile={imageBottomRight.localFile}
                                altText={imageBottomRight.altText}
                                className={styles.imageBottomRight}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroWithImagesAndLists;
