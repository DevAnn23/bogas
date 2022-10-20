import React from 'react';

import * as styles from './ContactUs.module.scss';
import ContactUsI from './ContactUs.type';
import Title from '../../components/Title/Title';
import UserCard from '../../components/UserCard/UserCard';
import Button from '../../components/Button/Button';
import ContactUsForm from '../../components/Form/ContactUsForm/ContactUsForm';

const ContactUs = ({
    options,
    subtitle,
    title,
    contactPerson,
    subject,
    recipients,
}: ContactUsI) => {
    return (
        <section id={'contact'}>
            <div className={'container'}>
                <Title
                    level={'h3'}
                    title={title ? title : options.defaultContactUs.title}
                    subtitle={
                        subtitle ? subtitle : options.defaultContactUs.subtitle
                    }
                />
                <div className={styles.wrapper}>
                    <div className={styles.contactPerson}>
                        <UserCard
                            author={
                                contactPerson
                                    ? contactPerson
                                    : options.defaultContactUs.contactUser
                            }
                            caption={
                                contactPerson?.author.position
                                    ? contactPerson.author.position
                                    : options.defaultContactUs.contactUser
                                          .author.position
                            }
                        />

                        {contactPerson ? (
                            <div className={styles.socialsPerson}>
                                {contactPerson.author.twitter && (
                                    <Button
                                        text={'Twitter'}
                                        url={contactPerson.author.twitter}
                                        target={'_blank'}
                                        isTransparent
                                        icon={
                                            options.defaultContactUs.iconTwitter
                                        }
                                        className={styles.socialButton}
                                    />
                                )}
                                {contactPerson.author.linkedin && (
                                    <Button
                                        text={'Linkedin'}
                                        url={contactPerson.author.linkedin}
                                        target={'_blank'}
                                        isTransparent
                                        icon={
                                            options.defaultContactUs
                                                .iconLinkedin
                                        }
                                        className={styles.socialButton}
                                    />
                                )}
                            </div>
                        ) : (
                            <div className={styles.socialsPerson}>
                                {options.defaultContactUs.contactUser.author
                                    .twitter && (
                                    <Button
                                        text={'Twitter'}
                                        url={
                                            options.defaultContactUs.contactUser
                                                .author.twitter
                                        }
                                        target={'_blank'}
                                        isTransparent
                                        icon={
                                            options.defaultContactUs.iconTwitter
                                        }
                                        className={styles.socialButton}
                                    />
                                )}
                                {options.defaultContactUs.contactUser.author
                                    .linkedin && (
                                    <Button
                                        text={'Linkedin'}
                                        url={
                                            options.defaultContactUs.contactUser
                                                .author.linkedin
                                        }
                                        target={'_blank'}
                                        isTransparent
                                        icon={
                                            options.defaultContactUs
                                                .iconLinkedin
                                        }
                                        className={styles.socialButton}
                                    />
                                )}
                            </div>
                        )}
                    </div>

                    <ContactUsForm subject={subject} recipients={recipients} />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
