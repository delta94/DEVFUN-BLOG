import React from 'react';
import { NetlifyCmsApp as CMS } from 'netlify-cms-app/dist/esm';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerMediaLibrary(cloudinary);

/**
 * Load Netlify CMS automatically if `window.CMS_MANUAL_INIT` is set.
 */
if (!window.CMS_MANUAL_INIT) {
  CMS.init();
} else {
  // eslint-disable-next-line no-console
  console.log(
    '`window.CMS_MANUAL_INIT` flag set, skipping automatic initialization.'
  );
}

export const NetlifyCms = {
  ...CMS,
};
export default CMS;
