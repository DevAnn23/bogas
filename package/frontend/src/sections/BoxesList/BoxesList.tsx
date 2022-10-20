import React from 'react';

import * as styles from './BoxesList.module.scss';
import BoxesListI from './BoxesList.type';
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';
import { cn } from '../../utils';

const BoxesList = ({ title, boxesList }: BoxesListI) => {
    return (
        <section className={styles.section}>
            <div className={'container'}>
                <div
                    className={cn(
                        title ? styles.boxesListWithTitle : styles.boxesList,
                        boxesList.length > 5 ? styles.size4 : styles.size3
                    )}
                >
                    {title && (
                        <Title
                            level={'h2'}
                            title={title}
                            className={styles.title}
                        />
                    )}

                    {boxesList.map((box, index) => (
                        <Box
                            key={box.title + index}
                            type={title ? 'column' : 'row'}
                            subtitle={box.subtitle}
                            title={box.title}
                            description={box.description}
                            icon={box.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoxesList;
