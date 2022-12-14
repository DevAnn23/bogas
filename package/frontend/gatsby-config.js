const fs = require('fs');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const WebManifest = JSON.parse(
    fs.readFileSync('src/sitemeta/site.webmanifest')
);

module.exports = {
    siteMetadata: {
        title: `theme`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-wordpress-menus',
            options: {
                wordpressUrl: process.env.GATSBY_WP_URL,
                languages: ['pl', 'en'],
                enableWpml: true,
                allowCache: true,
                maxCacheDurationSeconds: 60 * 60 * 24,
            },
        },
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'src/assets/images/',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'icons',
                path: 'src/assets/icons/',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'sitemeta',
                path: 'src/sitemeta/',
            },
        },
        {
            resolve: 'gatsby-transformer-sharp',
            options: {
                checkSupportedExtensions: false,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    quality: 65,
                },
            },
        },
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: `${
                    (process.env.GATSBY_WP_URL || 'http://theme.local') +
                    '/graphql/'
                }`,
                schema: { typePrefix: 'Wp', timeout: 1000000 },
                develop: {
                    hardCacheMediaFiles: true,
                },
                html: {
                    imageMaxWidth: 1920,
                },
                type: {
                    Post: {
                        limit: process.env.GATSBY_MAX_POST || 5000,
                    },
                    Tag: {
                        limit: process.env.GATSBY_MAX_POST || 5000,
                    },
                    MediaItem: {
                        localFile: {
                            maxFileSizeBytes: 31457280, // 30MB
                        },
                    },
                },
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-manifest',
            options: WebManifest,
        },
        {
            resolve: 'gatsby-plugin-brotli',
            options: {
                extensions: ['css', 'html', 'js', 'svg'],
            },
        },
        'gatsby-plugin-wpgraphql-seo',
        {
            resolve: `gatsby-plugin-minify-classnames`,
            options: {
                dictionary:
                    'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
                enable: process.env.NODE_ENV === 'production',
                prefix: '',
                sufix: '',
            },
        },
        'gatsby-plugin-minify',
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname:
                    process.env.GATSBY_DISQUS_SHORTNAME ||
                    'theme-data-science-blog',
            },
        },
        // {
        //     resolve: `gatsby-plugin-google-amp`,
        //     options: {
        //         canonicalBaseUrl:
        //             process.env.GATSBY_URL || 'https://theme.com',
        //         pathIdentifier: '/amp/',
        //         relAmpHtmlPattern:
        //             '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
        //     },
        // },
    ],
};
