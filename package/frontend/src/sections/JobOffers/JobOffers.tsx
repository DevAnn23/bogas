import React from 'react';

import * as styles from './JobOffers.module.scss';
import JobOffersI from './JobOffers.type';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import TagsList from '../../components/TagsList/TagsList';
import Button from '../../components/Button/Button';

const JobOffers = ({ title, iconTitle, jobOffers }: JobOffersI) => {
    return (
        <section id="offers" className={styles.section}>
            <div className={'container'}>
                {title && (
                    <div className={styles.titleWrapper}>
                        <Title
                            level={'h2'}
                            title={title}
                            className={styles.title}
                        />
                        {iconTitle && (
                            <Image
                                localFile={iconTitle.localFile}
                                altText={iconTitle.altText}
                                className={styles.iconTitle}
                            />
                        )}
                    </div>
                )}

                <div className={styles.offersList}>
                    {jobOffers.map((offer) => (
                        <a
                            key={offer.id}
                            href={offer.jobOffers.externalLink}
                            target={'_blank'}
                            className={styles.offer}
                        >
                            <Title
                                level={'h4'}
                                title={offer.title}
                                className={styles.offerTitle}
                            />
                            {offer.jobOffersTags.nodes.length > 0 && (
                                <TagsList
                                    tags={offer.jobOffersTags}
                                    className={styles.tagsList}
                                />
                            )}

                            {offer.jobOffers.salary && (
                                <div className={styles.salary}>
                                    {offer.jobOffers.salary}
                                </div>
                            )}

                            <Button
                                text={'Apply Now'}
                                type={'secondary'}
                                className={styles.button}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobOffers;
