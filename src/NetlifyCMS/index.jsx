import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import EditorYoutube from './components/EditorYoutube';
import AnotherYoutube from './components/AnotherYoutube';
import config from './config.json';
// import BlogPostPreview from './previewTemplates/BlogPostPreview';
import './widgets/Upload';
// Media Libary
CMS.registerMediaLibrary(cloudinary);

// Component Editor
CMS.registerEditorComponent(EditorYoutube);
CMS.registerEditorComponent(AnotherYoutube);
CMS.init({
  media_library: {
    name: 'cloudinary',
    config: {
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
    },
  },
  ...config,
});

// Preview Template

// CMS.registerPreviewTemplate('blog', BlogPostPreview);
