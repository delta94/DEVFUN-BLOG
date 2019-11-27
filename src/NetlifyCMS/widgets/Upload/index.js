import CMS from 'netlify-cms-app';
import Control from './Control';
import Preview from './Preview';

CMS.registerWidget('svg', Control, Preview);
