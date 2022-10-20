import React from 'react';

import * as styles from './ContentWithTitleAndButton.module.scss';
import ContentWithTitleAndButtonI from './ContentWithTitleAndButton.type';
import ContentWithTitle from '../../components/ContentWithTitle/ContentWithTitle';
import Button from '../../components/Button/Button';

const ContentWithTitleAndButton = ({
    title,
    content,
    button,
    smallContainer,
}: ContentWithTitleAndButtonI) => {
    return (
        <section>
            <div className={'container'}>
                <div {...(smallContainer && { className: styles.wrapper })}>
                    <ContentWithTitle
                        title={title}
                        titleStyles={styles.title}
                        description={content}
                        descriptionStyles={styles.content}
                    />
                    <Button
                        text={button.title}
                        url={button.url}
                        target={button.target}
                        className={styles.button}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContentWithTitleAndButton;
