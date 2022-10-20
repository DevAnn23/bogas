const path = require(`path`);

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const {
        data: {
            allWpPost: { nodes: postNodes },
            allWpPage: { nodes: pageNodes },
        },
    } = await graphql(`
        query {
            allWpPost(sort: { fields: date, order: DESC }) {
                nodes {
                    uri
                    id
                    title
                    content
                    seo {
                        title
                        metaDesc
                        canonical
                    }
                }
            }
            allWpPage {
                nodes {
                    uri
                    id
                    title
                    content
                    seo {
                        title
                        metaDesc
                    }
                }
            }
        }
    `);
    const postTemplate = path.resolve(`./src/pages/post.tsx`);
    postNodes.forEach((post) => {
        createPage({
            path: post.uri,
            component: postTemplate,
            context: {
                ...post,
                id: post.id,
                slug: post.uri,
            },
        });
    });
    const pageTemplate = path.resolve(`src/pages/page.tsx`);

    pageNodes.forEach((post) => {
        createPage({
            path: post.uri != '/home/' ? post.uri : '/',
            component: pageTemplate,
            context: { ...post },
        });
    });
};
