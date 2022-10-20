import React from 'react';

import * as styles from './ImageWithContent.module.scss';
import ImageWithContentI from './ImageWithContent.type';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import { cn } from '../../utils';
import ContentWithTitle from '../../components/ContentWithTitle/ContentWithTitle';

const ImageWithContent = ({
    title,
    description,
    contentAround,
    button,
    image,
}: ImageWithContentI) => {
    return (
        <section>
            <div className={'container'}>
                <div
                    className={cn(
                        styles.wrapper,
                        button && styles.withButton,
                        contentAround && styles.around
                    )}
                >
                    <Image
                        localFile={image.localFile}
                        altText={image.altText}
                        className={cn(
                            styles.image,
                            contentAround && styles.aroundImage
                        )}
                    />

                    <ContentWithTitle
                        title={title}
                        titleStyles={styles.title}
                        description={description}
                        descriptionStyles={styles.description}
                    />
                    {button && (
                        <div className={styles.buttonWrapper}>
                            <Button
                                text={button.title}
                                url={button.url}
                                target={button.target}
                                className={styles.button}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ImageWithContent;
