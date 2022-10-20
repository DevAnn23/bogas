import * as React from 'react';
import '../assets/styles/index.scss';
import Layout from '../containers/Layout/Layout';
import Seo from '../components/Seo/Seo';

interface IPageProps {
    [key: string]: any;
}

const Page: React.FC<IPageProps> = ({ pageContext }) => {
    const { seo } = pageContext;

    return (
        <Layout {...pageContext}>
            <Seo
                title={seo && seo.title}
                description={seo && seo.metaDesc}
                twitterDescription={seo && seo.twitterDescription}
                twitterTitle={seo && seo.twitterTitle}
            />
            <div id="page">{pageContext.title}</div>
        </Layout>
    );
};

export default Page;
