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
  imageTw
}) => {
  const {
    siteTitle,
    siteUrl,
    siteCover,
    siteDescription,
    twitterUsername
  } = useSiteMetadata();

  const formatedSiteUrl = siteUrl.substring(0, siteUrl.length - 1);
  const imagePath = imageFb || cover || withPrefix(siteCover);
  const image = `${formatedSiteUrl}${imagePath}`;
  const imagePathTwitter = imageTw || cover || withPrefix(siteCover);
  const imageTwitter = `${formatedSiteUrl}${imagePathTwitter}`;

  return (
    <Helmet title={title ? `${title} | ${siteTitle}` : siteTitle}>
      <html lang={lang} />
      <meta name="description" content={description} />
      <link rel="canonical" href={formatedSiteUrl + withPrefix(path)} />
      <meta property="og:url" content={formatedSiteUrl + withPrefix(path)} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageTwitter} />
    </Helmet>
  );
};

SEO.propTypes = {
  path: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool.isRequired,
  imageFb: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  imageTw: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

SEO.defaultProps = {
  path: '',
  lang: 'en'
};

export default SEO;
