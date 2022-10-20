import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import * as styles from './OurTeam.module.scss';
import OurTeamI from './OurTeam.type';
import Title from '../../components/Title/Title';
import WorkmateTestimonial from '../../components/WorkmateTestimonial/WorkmateTestimonial';
import Image from '../../components/Image/Image';
import useResponsive from '../../hooks/useResponsive';
import { cn } from '../../utils';

const OurTeam = ({ options, subtitle, title, workmates }: OurTeamI) => {
    const oddPersons = workmates.filter((el, index) => (index + 1) % 2 === 1);
    const evenPersons = workmates.filter((el, index) => (index + 1) % 2 === 0);

    const responsiveMd = useResponsive('md');
    const [isBiggerThanMd, setIsBiggerThanMd] = useState(true);

    useEffect(() => {
        setIsBiggerThanMd(responsiveMd);
    }, [responsiveMd]);

    return (
        <section className={styles.section}>
            {options.ourTeamTopRightBg && (
                <Image
                    localFile={options.ourTeamTopRightBg?.localFile}
                    altText={options.ourTeamTopRightBg?.altText}
                    className={styles.topRightBg}
                />
            )}
            {options.ourTeamBottomLeftBg && (
                <Image
                    localFile={options.ourTeamBottomLeftBg?.localFile}
                    altText={options.ourTeamBottomLeftBg?.altText}
                    className={styles.bottomLeftBg}
                />
            )}

            <div className={cn('container', styles.container)}>
                <Title
                    level={'h2'}
                    title={title ? title : options.ourTeamDefaultTitle}
                    subtitle={subtitle}
                    className={styles.title}
                />
                {isBiggerThanMd ? (
                    <div className={styles.wrapperGrid}>
                        <div className={styles.column}>
                            {oddPersons.map((item) => (
                                <WorkmateTestimonial
                                    key={item.id}
                                    workmate={item}
                                />
                            ))}
                        </div>
                        <div className={styles.column}>
                            {evenPersons.map((item) => (
                                <WorkmateTestimonial
                                    key={item.id}
                                    workmate={item}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <Swiper spaceBetween={16} slidesPerView={'auto'}>
                        {workmates.map((item) => (
                            <SwiperSlide key={item.id} className={styles.slide}>
                                <WorkmateTestimonial workmate={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default OurTeam;
