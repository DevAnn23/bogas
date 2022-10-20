import React from 'react';

import LayoutI from './Layout.type';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Helmet from '../Helmet/Helmet';

const Layout = ({ children, title, thumbnail }: LayoutI) => {
    return (
        <>
            <Helmet title={title} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
