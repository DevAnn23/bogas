import React, { useState } from 'react';

import SwiperCore, { FreeMode, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';

import * as styles from './Benefits.module.scss';
import BenefitsI from './Benefits.type';
import Title from '../../components/Title/Title';
import { cn } from '../../utils';
import BenefitList from '../../components/BenefitsList/BenefitsList';
import * as breakpoints from '../../assets/styles/variables/breakpoints.module.scss';

const Benefits = ({ title, options }: BenefitsI) => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [activeSlide, setActiveSlide] = useState<number>(0);

    return (
        <section>
            <div className={'container'}>
                <div className={styles.wrapper}>
                    <Title
                        level={'h2'}
                        title={title ? title : options.benefits.defaultTitle}
                        className={styles.title}
                    />

                    <div className={styles.slidersWrapper}>
                        <Swiper
                            modules={[FreeMode]}
                            slidesPerView={'auto'}
                            freeMode={true}
                            spaceBetween={16}
                            breakpoints={{
                                [breakpoints['md']]: {
                                    spaceBetween: 32,
                                },
                                [breakpoints['xl']]: {
                                    spaceBetween: 0,
                                    allowTouchMove: false,
                                },
                            }}
                            className={styles.sliderNav}
                        >
                            {options.benefits.titlesList.map(
                                (tab, tabIndex) => (
                                    <SwiperSlide
                                        key={tab.title + tabIndex}
                                        className={cn(
                                            styles.slideNav,
                                            tabIndex === activeSlide &&
                                                styles.active
                                        )}
                                    >
                                        <div
                                            onClick={() =>
                                                swiper?.slideTo(tabIndex)
                                            }
                                            className={styles.slideNavTitle}
                                        >
                                            {tab.title}
                                        </div>
                                    </SwiperSlide>
                                )
                            )}
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
                            autoHeight={true}
                            className={styles.slider}
                        >
                            {options.benefits.titlesList.map(
                                (tabContent, index) => (
                                    <SwiperSlide key={tabContent.title + index}>
                                        <BenefitList
                                            list={tabContent.benefitsList}
                                        />

                                        {tabContent.forPolishList && (
                                            <>
                                                <p className={styles.only}>
                                                    {
                                                        options.benefits
                                                            .residentsOnlyText
                                                    }
                                                </p>
                                                <BenefitList
                                                    list={
                                                        tabContent.forPolishList
                                                    }
                                                />
                                            </>
                                        )}
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
