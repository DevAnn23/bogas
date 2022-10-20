declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.ico';
declare module 'gatsby-plugin-disqus';
declare module 'gatsby-plugin-mailchimp';
declare module 'react-embed-gist';

declare module '*.scss' {
    const content: { [className: string]: string };

    export = content;
}

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}
