import React, { useState } from 'react';
import HtmlParser from 'html-react-parser';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import * as styles from './Testimonials.module.scss';
import TestimonialsI from './Testimonials.type';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import { cn } from '../../utils';
import IconsList from '../../components/IconsList/IconsList';
import SliderArrows from '../../components/SliderArrows/SliderArrows';
import * as breakpoints from '../../assets/styles/variables/breakpoints.module.scss';

const Testimonials = ({
    options,
    subtitle,
    title,
    showAll,
    testimonials,
    testimonialsRelationship,
    logosList,
}: TestimonialsI) => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    const logosArr = logosList
        ? logosList
        : options.testimonialsDefaultLogosList;

    const testimonialsList = showAll ? testimonials : testimonialsRelationship;

    return (
        <section
            className={cn(
                styles.section,
                testimonialsList.length <= 3 && styles.lessThan3Section
            )}
        >
            <div
                className={
                    testimonialsList.length > 3
                        ? styles.moreThan3Wrapper
                        : styles.lessThan3Wrapper
                }
            >
                <Title
                    level={'h3'}
                    title={title ? title : options.testimonialsDefaultTitle}
                    subtitle={
                        subtitle
                            ? subtitle
                            : options.testimonialsDefaultSubtitle
                    }
                    {...(testimonialsList.length <= 3 && {
                        button: options.testimonialsLink,
                    })}
                    className={styles.title}
                />
                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl, nextEl }}
                        spaceBetween={8}
                        slidesPerView={'auto'}
                        breakpoints={{
                            [breakpoints['md']]: {
                                spaceBetween: 24,
                            },
                        }}
                        className={styles.slider}
                    >
                        {testimonialsList.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className={cn(
                                    styles.slide,
                                    testimonialsList.length <= 3 &&
                                        styles.lessThan3Slide
                                )}
                            >
                                <div className={styles.top}>
                                    <div className={styles.details}>
                                        {testimonialsList.length > 3 && (
                                            <div className={styles.avatar}>
                                                <Image
                                                    localFile={
                                                        item.testimonials.photo
                                                            .localFile
                                                    }
                                                    altText={
                                                        item.testimonials.photo
                                                            .altText
                                                    }
                                                />
                                            </div>
                                        )}
                                        <div className={styles.right}>
                                            <Title
                                                level={'h4'}
                                                title={item.title}
                                                className={styles.name}
                                            />
                                            <div className={styles.position}>
                                                {item.testimonials.position}
                                            </div>
                                        </div>
                                    </div>
                                    {testimonialsList.length > 3 && (
                                        <Image
                                            localFile={
                                                item.testimonials.logo.localFile
                                            }
                                            altText={
                                                item.testimonials.logo.altText
                                            }
                                        />
                                    )}
                                </div>
                                <p className={styles.description}>
                                    {HtmlParser(item.testimonials.description)}
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {testimonialsList.length > 3 && (
                        <SliderArrows
                            className={styles.sliderArrows}
                            refPrev={(node) => setPrevEl(node)}
                            refNext={(node) => setNextEl(node)}
                        />
                    )}
                </div>

                <IconsList
                    list={
                        testimonialsList.length > 3
                            ? logosArr
                            : logosArr.slice(0, 1)
                    }
                    className={cn(
                        styles.logosList,
                        testimonialsList.length <= 3 && styles.lessThan3LogoList
                    )}
                />
            </div>
        </section>
    );
};

export default Testimonials;
