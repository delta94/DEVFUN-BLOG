import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../../hooks/useSiteMetadata';

const SEO = ({
  isBlogPost,
  path,
  lang,
  title,
  imageFb,
  cover,
  description,
  imageTw,
}) => {
  const {
    siteTitle,
    siteUrl,
    siteCover,
    siteDescription,
    twitterUsername,
  } = useSiteMetadata();

  const formatedSiteUrl = siteUrl.substring(0, siteUrl.length - 1);
  const imagePath = imageFb || cover || withPrefix(siteCover);
  const image = `${formatedSiteUrl}${imagePath}`;
  const imagePathTwitter = imageTw || cover || withPrefix(siteCover);
  const imageTwitter = `${formatedSiteUrl}${imagePathTwitter}`;

  return (
    <Helmet title={title ? `${siteTitle} | ${title}` : siteTitle}>
      <html lang={lang} />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />
      <meta name="description" content={description || siteDescription} />
      <link rel="canonical" href={formatedSiteUrl + withPrefix(path)} />
      <meta property="og:url" content={formatedSiteUrl + withPrefix(path)} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || siteDescription}
      />
      <meta name="twitter:image" content={imageTwitter} />
    </Helmet>
  );
};

SEO.propTypes = {
  path: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
  isBlogPost: PropTypes.bool,
  imageFb: PropTypes.string,
  cover: PropTypes.string,
  imageTw: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  path: '',
  lang: 'en',
  title: null,
  isBlogPost: false,
  cover: null,
  imageFb: null,
  imageTw: null,
  description: null,
};

export default SEO;
