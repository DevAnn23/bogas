import * as React from 'react';
import '../assets/styles/index.scss';
import Layout from '../containers/Layout/Layout';
import Seo from '../components/Seo/Seo';
import BlogPostTemplate from '../templates/post';
interface IPostProps {
    [key: string]: any;
}

const PostPage: React.FC<IPostProps> = ({ pageContext }) => {
    const seo = pageContext.seo;
    return (
        <Layout {...pageContext}>
            <Seo
                title={seo && seo.title}
                description={seo && seo.metaDesc}
                twitterDescription={seo && seo.twitterDescription}
                twitterTitle={seo && seo.twitterTitle}
            />
            <BlogPostTemplate pageContext={pageContext} />
        </Layout>
    );
};
export default PostPage;
