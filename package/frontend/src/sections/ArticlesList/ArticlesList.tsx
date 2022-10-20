import React, { useEffect, useState } from 'react';

import * as styles from './ArticlesList.module.scss';
import ArticlesListI from './ArticlesList.type';
import Title from '../../components/Title/Title';
import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import useResponsive from '../../hooks/useResponsive';
import { cn } from '../../utils';

const ArticlesList = ({
    subtitle,
    title,
    showLatest,
    numberOfArticles,
    buttonTitle,
    articlesLatest,
    articlesRelationship,
}: ArticlesListI) => {
    const articlesList = showLatest
        ? articlesLatest.slice(0, numberOfArticles)
        : articlesRelationship;
    const responsiveXl = useResponsive('xl');
    const [isBiggerThanXl, setIsBiggerThanXl] = useState(true);

    useEffect(() => {
        setIsBiggerThanXl(responsiveXl);
    }, [responsiveXl]);

    return (
        <section>
            <div className={'container'}>
                <Title
                    level={'h3'}
                    title={title}
                    subtitle={subtitle}
                    className={styles.title}
                    button={buttonTitle}
                />
                <div className={styles.articlesList}>
                    {articlesList.map((article, index) => (
                        <ArticleThumbnail
                            key={article.id}
                            article={article}
                            size={
                                index < (isBiggerThanXl ? 2 : 1) &&
                                articlesList.length == 5
                                    ? 'large'
                                    : 'medium'
                            }
                            className={cn(
                                index < (isBiggerThanXl ? 2 : 1) &&
                                    articlesList.length == 5
                                    ? styles.articleLg
                                    : styles.articleMd,
                                index < 1 &&
                                    articlesList.length == 3 &&
                                    styles.articleLgOnTablet
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesList;
