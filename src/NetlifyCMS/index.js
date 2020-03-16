import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import EditorYoutube from './components/EditorYoutube';
import AnotherYoutube from './components/AnotherYoutube';
import './widgets/Upload';

CMS.registerMediaLibrary(cloudinary);
CMS.registerEditorComponent(EditorYoutube);
CMS.registerEditorComponent(AnotherYoutube);
CMS.init();
