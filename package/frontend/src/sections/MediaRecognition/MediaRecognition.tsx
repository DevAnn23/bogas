import React from 'react';

import * as styles from './MediaRecognition.module.scss';
import MediaRecognitionI from './MediaRecognition.type';
import ContentWithTitle from '../../components/ContentWithTitle/ContentWithTitle';
import MediaOrResearchThumbnail from '../../components/MediaOrResearchThumbnail/MediaOrResearchThumbnail';

const MediaRecognition = ({
    title,
    description,
    showLatest,
    numberOfElements,
    mediaRecognitionLatest,
    mediaRecognitionRelationship,
}: MediaRecognitionI) => {
    const mediaRecognitionList = showLatest
        ? mediaRecognitionLatest.slice(0, numberOfElements)
        : mediaRecognitionRelationship;

    return (
        <section className={styles.section}>
            <div className={'container'}>
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <ContentWithTitle
                            title={title}
                            description={description}
                        />
                    </div>
                    <div className={styles.list}>
                        {mediaRecognitionList.map((article) => (
                            <MediaOrResearchThumbnail
                                key={article.id}
                                article={article}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaRecognition;
