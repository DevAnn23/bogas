import React, { useMemo, useState, useEffect } from 'react';
import HtmlParser from 'html-react-parser';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import * as styles from './BlogArchive.module.scss';
import BlogArchiveI from './BlogArchive.type';
import Title from '../../components/Title/Title';
import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import NewsletterForm from '../../components/Form/NewsletterForm/NewsletterForm';
import { cn, findInText } from '../../utils';
import { Link } from 'gatsby';
import * as breakpoints from '../../assets/styles/variables/breakpoints.module.scss';
import Button from '../../components/Button/Button';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import SearchForm from '../../components/Form/SearchForm/SearchForm';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import useResponsive from '../../hooks/useResponsive';

const BlogArchive = ({ options, subtitle, title, articles }: BlogArchiveI) => {
    const [swiperLock, setSwiperLock] = useState(false);
    const [maxNumberPosts, setMaxNumberPosts] = useState(8);

    const responsiveXl = useResponsive('xl');
    const [isBiggerThanXl, setIsBiggerThanXl] = useState(true);

    useEffect(() => {
        setIsBiggerThanXl(responsiveXl);
    }, [responsiveXl]);

    const [searchInputValue, setSearchInputValue] = useState('');
    useEffect(() => {
        setMaxNumberPosts(8);
    }, [searchInputValue]);

    const articlesToShow = useMemo(
        () =>
            articles.filter(
                (post) =>
                    findInText(post.title, searchInputValue) ||
                    findInText(post.content, searchInputValue) ||
                    (post.post &&
                        findInText(post.post.excerpt, searchInputValue))
            ),
        [searchInputValue]
    );

    return (
        <section className={styles.section}>
            <div className={'container'}>
                <Title
                    className={styles.title}
                    title={title ? title : options.blogArchive.title}
                    subtitle={
                        subtitle ? subtitle : options.blogArchive.subtitle
                    }
                    level={'h1'}
                />
                <div className={styles.searchAndSocialWrapper}>
                    <SearchForm onSubmit={setSearchInputValue} />
                    {searchInputValue !== '' && articlesToShow.length === 0 && (
                        <div className={styles.noSearchResults}>
                            No results for <span>{searchInputValue}</span>
                        </div>
                    )}
                    <SocialLinks
                        socialLinks={options.socials}
                        className={styles.socials}
                    />
                </div>

                {articlesToShow.length > 0 && (
                    <ArticleThumbnail
                        size={'xlarge'}
                        article={articlesToShow[0]}
                    />
                )}

                <Swiper
                    onLock={() => setSwiperLock(true)}
                    onUnlock={() => setSwiperLock(false)}
                    modules={[FreeMode]}
                    slidesPerView={'auto'}
                    freeMode={true}
                    spaceBetween={8}
                    preventClicks={false}
                    breakpoints={{
                        [breakpoints['md']]: {
                            spaceBetween: 16,
                        },
                        [breakpoints['xl']]: {
                            spaceBetween: 32,
                        },
                    }}
                    className={cn(
                        styles.tagsSlider,
                        swiperLock && styles.tagsSliderLock
                    )}
                >
                    <SwiperSlide className={styles.tagSlide}>
                        <Link
                            to={'/blog/'}
                            activeClassName={styles.active}
                            className={styles.tagLink}
                        >
                            <span className={styles.tagTitle}>
                                All Articles
                            </span>
                        </Link>
                    </SwiperSlide>
                    {options.blogArchive.tagsList.map((tab) => (
                        <SwiperSlide key={tab.id} className={styles.tagSlide}>
                            {tab.uri && (
                                <Link
                                    to={tab.uri}
                                    activeClassName={styles.active}
                                    className={styles.tagLink}
                                >
                                    <span className={styles.tagTitle}>
                                        {tab.name}
                                    </span>
                                </Link>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={styles.articlesWithSidebarWrapper}>
                    <div className={styles.articlesColumn}>
                        {articlesToShow.slice(1, 5).map((item) => (
                            <ArticleThumbnail
                                key={item.id}
                                article={item}
                                size={isBiggerThanXl ? 'large' : 'medium'}
                                className={styles.article}
                            />
                        ))}
                    </div>

                    {isBiggerThanXl && (
                        <div className={styles.sidebarColumn}>
                            <div className={styles.newsletter}>
                                <Title
                                    title={
                                        options.blogArchive.newsletterTitle
                                            ? options.blogArchive
                                                  .newsletterTitle
                                            : options.newsletterDefaultTitle
                                    }
                                    subtitle={
                                        options.blogArchive.newsletterSubtitle
                                            ? options.blogArchive
                                                  .newsletterSubtitle
                                            : options.newsletterDefaultSubtitle
                                    }
                                    level={'h4'}
                                />
                                <div className={styles.newsletterDescription}>
                                    {HtmlParser(
                                        options.blogArchive
                                            .newsletterDescription
                                            ? options.blogArchive
                                                  .newsletterDescription
                                            : options.newsletterDefaultDescription
                                    )}
                                </div>
                                <NewsletterForm
                                    consentContent={
                                        options.newsletterDefaultConsentContent
                                    }
                                    inSidebar={true}
                                />
                            </div>
                            <div className={styles.topStories}>
                                <Title
                                    className={
                                        options.blogArchive.topStoriesTitle &&
                                        styles.sidebarTitle
                                    }
                                    title={
                                        options.blogArchive.topStoriesTitle &&
                                        options.blogArchive.topStoriesTitle
                                    }
                                    subtitle={
                                        options.blogArchive.topStoriesSubtitle
                                    }
                                    subtitleClassName={
                                        options.blogArchive.topStoriesTitle
                                            ? undefined
                                            : styles.sidebarSubtitle
                                    }
                                    level={'h4'}
                                />
                                <div className={styles.articlesTopStories}>
                                    {options.blogArchive.topStories.map(
                                        (item) => (
                                            <ArticleThumbnail
                                                key={item.id}
                                                article={item}
                                                size={'small'}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.articlesWrapper}>
                    {articlesToShow.slice(5, maxNumberPosts).map((item) => (
                        <ArticleThumbnail
                            key={item.id}
                            article={item}
                            size={isBiggerThanXl ? 'large' : 'medium'}
                            className={styles.article}
                        />
                    ))}
                </div>

                {articlesToShow.length > maxNumberPosts && (
                    <div className={styles.loadMoreWrapper}>
                        <Button
                            text={'Load more'}
                            type={'secondary'}
                            icon={ArrowDown}
                            onClick={() =>
                                setMaxNumberPosts(maxNumberPosts + 3)
                            }
                        />
                    </div>
                )}

                {!isBiggerThanXl && (
                    <div className={styles.sidebarColumn}>
                        <div className={styles.topStories}>
                            <Title
                                className={
                                    options.blogArchive.topStoriesTitle &&
                                    styles.sidebarTitle
                                }
                                title={
                                    options.blogArchive.topStoriesTitle &&
                                    options.blogArchive.topStoriesTitle
                                }
                                subtitle={
                                    options.blogArchive.topStoriesSubtitle
                                }
                                subtitleClassName={
                                    options.blogArchive.topStoriesTitle
                                        ? undefined
                                        : styles.sidebarSubtitle
                                }
                                level={'h4'}
                            />
                            <div className={styles.articlesTopStories}>
                                {options.blogArchive.topStories.map((item) => (
                                    <ArticleThumbnail
                                        key={item.id}
                                        article={item}
                                        size={'small'}
                                        className={styles.articleTopStories}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className={styles.newsletter}>
                            <Title
                                title={
                                    options.blogArchive.newsletterTitle
                                        ? options.blogArchive.newsletterTitle
                                        : options.newsletterDefaultTitle
                                }
                                subtitle={
                                    options.blogArchive.newsletterSubtitle
                                        ? options.blogArchive.newsletterSubtitle
                                        : options.newsletterDefaultSubtitle
                                }
                                level={'h4'}
                            />
                            <div className={styles.newsletterDescription}>
                                {HtmlParser(
                                    options.blogArchive.newsletterDescription
                                        ? options.blogArchive
                                              .newsletterDescription
                                        : options.newsletterDefaultDescription
                                )}
                            </div>
                            <NewsletterForm
                                consentContent={
                                    options.newsletterDefaultConsentContent
                                }
                                inSidebar={true}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogArchive;
