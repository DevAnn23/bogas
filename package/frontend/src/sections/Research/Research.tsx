import React from 'react';

import * as styles from './Research.module.scss';
import ResearchI from './Research.type';
import Title from '../../components/Title/Title';
import MediaOrResearchThumbnail from '../../components/MediaOrResearchThumbnail/MediaOrResearchThumbnail';

const Research = ({
    options,
    subtitle,
    title,
    showLatest,
    numberOfElements,
    researchLatest,
    researchOrPostRelationship,
}: ResearchI) => {
    const researchOrPostList = showLatest
        ? researchLatest.slice(0, numberOfElements)
        : researchOrPostRelationship;
    return (
        <section>
            <div className={'container'}>
                <Title
                    level={'h3'}
                    title={title ? title : options.researchDefaultTitle}
                    subtitle={
                        subtitle ? subtitle : options.researchDefaultSubtitle
                    }
                    className={styles.title}
                />
                <div className={styles.list}>
                    {researchOrPostList.map((article) => (
                        <MediaOrResearchThumbnail
                            key={article.id}
                            className={styles.article}
                            article={article}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
