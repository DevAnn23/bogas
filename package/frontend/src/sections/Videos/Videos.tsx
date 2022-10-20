import React, { useState } from 'react';

import * as styles from './Videos.module.scss';
import VideosI from './Videos.type';
import Title from '../../components/Title/Title';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import PopupVideo from '../../components/PopupVideo/PopupVideo';

const Videos = ({
    subtitle,
    title,
    buttonIcon,
    buttonTitle,
    videos,
}: VideosI) => {
    const [videoId, setVideoId] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section className={styles.section}>
            <div className={'container'}>
                <Title
                    level={'h3'}
                    title={title}
                    subtitle={subtitle}
                    className={styles.title}
                    button={buttonTitle}
                    buttonIcon={buttonIcon}
                    buttonTransparent
                />
                <div className={styles.list}>
                    {videos.map((video) => (
                        <VideoThumbnail
                            key={video?.id}
                            videoPost={video}
                            setVideoId={setVideoId}
                            showPopup={() => setShowPopup(true)}
                            overlay
                            className={styles.videoThumbnail}
                        />
                    ))}
                </div>
            </div>
            <PopupVideo
                videoId={videoId}
                showPopup={showPopup}
                closePopupFn={() => {
                    setShowPopup(false);
                }}
            />
        </section>
    );
};

export default Videos;
