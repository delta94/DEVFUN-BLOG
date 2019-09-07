import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import EditorYoutube from './components/EditorYoutube';
import AnotherYoutube from './components/AnotherYoutube';
// import BlogPostPreview from './previewTemplates/BlogPostPreview';

// Media Libary
CMS.registerMediaLibrary(cloudinary);

// Component Editor
CMS.registerEditorComponent(EditorYoutube);
CMS.registerEditorComponent(AnotherYoutube);

// Preview Template

// CMS.registerPreviewTemplate('blog', BlogPostPreview);
