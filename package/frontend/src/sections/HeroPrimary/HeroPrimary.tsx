import React from 'react';

import * as styles from './HeroPrimary.module.scss';
import HeroPrimaryI from './HeroPrimary.type';
import ButtonsList from '../../components/ButtonsList/ButtonsList';
import IconsList from '../../components/IconsList/IconsList';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';

const HeroPrimary = ({
    options,
    subtitle,
    title,
    linksList,
    logosList,
}: HeroPrimaryI) => {
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

                        {logosList && (
                            <IconsList
                                className={styles.logosList}
                                list={logosList}
                            />
                        )}
                    </div>
                    <Image
                        className={styles.background}
                        localFile={
                            options.heroPrimaryDefaultBackground.localFile
                        }
                        altText={options.heroPrimaryDefaultBackground.altText}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroPrimary;
