import React from 'react';
import HtmlParser from 'html-react-parser';

import * as styles from './RecruitmentProccess.module.scss';
import RecruitmentProccessI from './RecruitmentProccess.type';
import Title from '../../components/Title/Title';

const RecruitmentProccess = ({
    subtitle,
    title,
    description,
    descriptionWithBackground,
    recruitmentProccess,
}: RecruitmentProccessI) => {
    return (
        <section>
            <div className={'container'}>
                <Title
                    level={'h2'}
                    title={title}
                    subtitle={subtitle}
                    className={styles.title}
                />

                {description && (
                    <div className={styles.description}>
                        {HtmlParser(description)}
                    </div>
                )}

                {descriptionWithBackground && (
                    <div className={styles.descriptionWithBackground}>
                        {HtmlParser(descriptionWithBackground)}
                    </div>
                )}

                <div className={styles.stepsList}>
                    {recruitmentProccess.map((step, index) => (
                        <div key={step.title + index} className={styles.step}>
                            <div className={styles.stepNumber}>
                                0{index + 1}
                            </div>
                            <div className={styles.stepDot} />
                            <Title
                                level={'h4'}
                                title={step.title}
                                className={styles.stepTitle}
                            />
                            <div className={styles.stepDescription}>
                                {step.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecruitmentProccess;
