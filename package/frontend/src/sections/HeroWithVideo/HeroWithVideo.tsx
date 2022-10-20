import React, { useState } from 'react';

import * as styles from './HeroWithVideo.module.scss';
import HeroWithVideoI from './HeroWithVideo.type';
import Box from '../../components/Box/Box';
import ButtonsList from '../../components/ButtonsList/ButtonsList';
import IconsList from '../../components/IconsList/IconsList';
import Title from '../../components/Title/Title';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import PopupVideo from '../../components/PopupVideo/PopupVideo';

const HeroWithVideo = ({
    title,
    boxesList,
    linksList,
    logosList,
    videoSection,
}: HeroWithVideoI) => {
    const [videoId, setVideoId] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.top}>
                <div className={styles.topInner}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <Title
                                className={styles.title}
                                title={title}
                                level={'h1'}
                            />
                            <ButtonsList
                                className={styles.linksList}
                                list={linksList}
                            />
                            <ul className={styles.boxesList}>
                                {boxesList.map((box, index) => (
                                    <li key={box.title + index}>
                                        <Box
                                            title={box.title}
                                            description={box.description}
                                            icon={box.icon}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.right}>
                            <VideoThumbnail
                                videoSection={videoSection}
                                setVideoId={setVideoId}
                                showPopup={() => setShowPopup(true)}
                                className={styles.videoThumbnail}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={'container'}>
                    <IconsList
                        className={styles.logosList}
                        list={logosList}
                        isFirstSeparate={true}
                    />
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

export default HeroWithVideo;
