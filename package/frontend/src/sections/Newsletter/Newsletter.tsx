import React from 'react';
import HtmlParser from 'html-react-parser';

import * as styles from './Newsletter.module.scss';
import NewsletterI from './Newsletter.type';
import { cn } from '../../utils';
import Image from '../../components/Image/Image';
import Title from '../../components/Title/Title';
import NewsletterForm from '../../components/Form/NewsletterForm/NewsletterForm';

const Newsletter = ({
    options,
    mailchimpListEndpoint,
    subtitle,
    title,
    description,
    consentContent,
    background,
}: NewsletterI) => {
    return (
        <section className={styles.section}>
            <div className={cn(styles.wrapper, 'container')}>
                <Image
                    className={styles.background}
                    localFile={
                        background
                            ? background.localFile
                            : options.newsletterDefaultBackground.localFile
                    }
                    altText={
                        background
                            ? background.altText
                            : options.newsletterDefaultBackground.altText
                    }
                />
                <div className={styles.inner}>
                    <Title
                        level={'h3'}
                        title={title ? title : options.newsletterDefaultTitle}
                        subtitle={
                            subtitle
                                ? subtitle
                                : options.newsletterDefaultSubtitle
                        }
                    />
                    <div className={styles.description}>
                        {HtmlParser(
                            description
                                ? description
                                : options.newsletterDefaultDescription
                        )}
                    </div>

                    <NewsletterForm
                        consentContent={
                            consentContent
                                ? consentContent
                                : options.newsletterDefaultConsentContent
                        }
                        mailchimpListEndpoint={mailchimpListEndpoint}
                    />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
