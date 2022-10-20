import React, { useState } from 'react';
import HtmlParser from 'html-react-parser';

import SwiperCore, { FreeMode, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';

import * as styles from './CaseStudies.module.scss';
import CaseStudiesI from './CaseStudies.type';
import Title from '../../components/Title/Title';
import TagsList from '../../components/TagsList/TagsList';
import Image from '../../components/Image/Image';
import { cn } from '../../utils';
import * as breakpoints from '../../assets/styles/variables/breakpoints.module.scss';

const CaseStudies = ({
    options,
    subtitle,
    title,
    showLatest,
    numberOfElements,
    buttonTitle,
    caseStudiesLatest,
    caseStudiesRelationship,
}: CaseStudiesI) => {
    const caseStudiesList = showLatest
        ? caseStudiesLatest.slice(0, numberOfElements)
        : caseStudiesRelationship;
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [activeSlide, setActiveSlide] = useState<number>(0);

    return (
        <section>
            <div className={'container'}>
                <Title
                    level={'h3'}
                    title={title ? title : options.caseStudiesDefaultTitle}
                    subtitle={
                        subtitle ? subtitle : options.caseStudiesDefaultSubtitle
                    }
                    className={styles.title}
                    button={buttonTitle}
                />

                <div className={styles.slidersWrapper}>
                    <Swiper
                        modules={[FreeMode]}
                        slidesPerView={'auto'}
                        freeMode={true}
                        spaceBetween={24}
                        breakpoints={{
                            [breakpoints['xxl']]: {
                                freeMode: false,
                                direction: 'vertical',
                                allowTouchMove: false,
                                threshold: 10000,
                            },
                        }}
                        className={styles.sliderNav}
                    >
                        {caseStudiesList.map((slide, slideIndex) => (
                            <SwiperSlide
                                key={slide.id}
                                className={cn(
                                    styles.slideNav,
                                    slideIndex === activeSlide && styles.active
                                )}
                            >
                                <div
                                    onClick={() => swiper?.slideTo(slideIndex)}
                                    className={styles.slideNavTitle}
                                >
                                    {slide.title}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        onSwiper={setSwiper}
                        onSlideChange={(slide) =>
                            setActiveSlide(slide.activeIndex)
                        }
                        modules={[EffectFade]}
                        effect={'fade'}
                        fadeEffect={{ crossFade: true }}
                        slidesPerView={1}
                        allowTouchMove={false}
                        className={styles.slider}
                    >
                        {caseStudiesList.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className={styles.slideInner}>
                                    <div>
                                        <TagsList
                                            tags={slide.caseStudiesTags}
                                            amount={4}
                                        />
                                        <Title
                                            level={'h4'}
                                            title={slide.title}
                                            className={styles.slideTitle}
                                        />
                                        <p className={styles.description}>
                                            {HtmlParser(
                                                slide.caseStudies.description
                                            )}
                                        </p>
                                    </div>
                                    <div className={styles.thumbnail}>
                                        <Image
                                            localFile={
                                                slide.featuredImage.node
                                                    .localFile
                                            }
                                            altText={
                                                slide.featuredImage.node.altText
                                            }
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
