import React from 'react';

import * as styles from './IconsWithContent.module.scss';
import IconsWithContentI from './IconsWithContent.type';
import ContentWithTitle from '../../components/ContentWithTitle/ContentWithTitle';
import IconsListWithTitle from '../../components/IconsListWithTitle/IconsListWithTitle';

const IconsWithContent = ({
    title,
    description,
    iconsList,
}: IconsWithContentI) => {
    return (
        <section className={styles.section}>
            <div className={'container'}>
                <div className={styles.wrapper}>
                    <div>
                        <ContentWithTitle
                            title={title}
                            description={description}
                        />
                    </div>
                    <div>
                        <IconsListWithTitle
                            list={iconsList}
                            className={styles.IconsListWithTitle}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IconsWithContent;
