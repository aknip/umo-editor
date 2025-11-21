import { createApp } from 'vue';
import { useUmoEditor } from '@umoteam/editor';
import App from './App.vue';

const app = createApp(App);

// Configure UMO Editor with English settings
app.use(useUmoEditor, {
  locale: 'en-US',
  theme: 'light',
  height: '600px',
  document: {
    title: 'UMO Editor Demo',
    placeholder: 'Start typing your document here...',
    enableMarkdown: true,
    enableBubbleMenu: true,
    enableBlockMenu: true,
    autofocus: true
  },
  page: {
    layouts: ['page', 'web'],
    defaultBackground: '#fff',
    showBreakMarks: true
  },
  toolbar: {
    defaultMode: 'ribbon',
    menus: ['base', 'insert', 'table', 'tools', 'page', 'export']
  }
});

app.mount('#app');