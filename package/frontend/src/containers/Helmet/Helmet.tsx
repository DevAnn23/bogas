import React from 'react';
import ReactHelmet from 'react-helmet';

import HelmetI from './Helmet.type';
import AppleTouchIcon from '../../sitemeta/apple-touch-icon.png';
import FaviconIco from '../../sitemeta/favicon.ico';
import Favicon16x16 from '../../sitemeta/favicon-16x16.png';
import Favicon32x32 from '../../sitemeta/favicon-32x32.png';
import Favicon192x192 from '../../sitemeta/android-chrome-192x192.png';
import SafariPinnedTab from '../../sitemeta/safari-pinned-tab.svg';
import DefaultThumbnail from '../../assets/images/theme-default-thumbnail.jpg';

const Helmet = ({ title, thumbnail }: HelmetI) => (
    <ReactHelmet
        title={`theme | ${title}`}
        meta={[
            {
                name: 'description',
                content:
                    'We deliver software development and ML solutions for Fortune 500 companies. We are an RStudio Full Service Certified Partner and global leaders in R Shiny.',
            },
            {
                name: 'robots',
                content: 'index,follow',
            },
            {
                name: 'copyright',
                content: 'Copyrights © theme.com. All rights reserved.',
            },
            {
                name: 'msapplication-TileColor',
                content: '#da532c',
            },
            {
                name: 'theme-color',
                content: '#ffffff',
            },
            {
                property: 'og:image',
                content: thumbnail
                    ? thumbnail.node.localFile.publicURL
                    : DefaultThumbnail,
            },
        ]}
        link={[
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: AppleTouchIcon,
            },
            {
                rel: 'icon',
                type: 'image/x-icon',
                sizes: '16x16',
                href: FaviconIco,
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: Favicon32x32,
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: Favicon16x16,
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '192x192',
                href: Favicon192x192,
            },
            {
                rel: 'mask-icon',
                href: SafariPinnedTab,
                color: '#ffffff',
            },
        ]}
        htmlAttributes={{ lang: 'en-US' }}
    ></ReactHelmet>
);

export default Helmet;
