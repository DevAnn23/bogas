import React, { useState } from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import * as styles from './Gallery.module.scss';
import GalleryI from './Gallery.type';
import { cn } from '../../utils';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import SliderArrows from '../../components/SliderArrows/SliderArrows';
import * as breakpoints from '../../assets/styles/variables/breakpoints.module.scss';

const Gallery = ({ subtitle, title, hasBackground, imagesList }: GalleryI) => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    return (
        <section
            className={cn(styles.section, hasBackground && styles.hasBackround)}
        >
            {hasBackground && <div className={styles.background} />}
            {imagesList.length > 3 && (
                <div className={cn('container', styles.arrowsContainer)}>
                    <SliderArrows
                        refPrev={(node) => setPrevEl(node)}
                        refNext={(node) => setNextEl(node)}
                    />
                </div>
            )}

            <div className={styles.wrapper}>
                {title && (
                    <Title
                        level={'h3'}
                        title={title}
                        subtitle={subtitle}
                        className={styles.title}
                    />
                )}

                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl, nextEl }}
                        spaceBetween={16}
                        slidesPerView={'auto'}
                        breakpoints={{
                            [breakpoints['md']]: {
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {imagesList.map((item, index) => (
                            <SwiperSlide
                                key={item.image.altText + index}
                                className={styles.slide}
                            >
                                <Image
                                    localFile={item.image.localFile}
                                    altText={item.image.altText}
                                    className={styles.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
