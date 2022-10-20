import React from 'react';
import HtmlParser from 'html-react-parser';

import * as styles from './WysiwygContent.module.scss';
import WysiwygContentI from './WysiwygContent.type';
import { cn } from '../../utils';

const WysiwygContent = ({ content }: WysiwygContentI) => {
    return (
        <section>
            <div className={cn('container', styles.content)}>
                {HtmlParser(content)}
            </div>
        </section>
    );
};

export default WysiwygContent;
