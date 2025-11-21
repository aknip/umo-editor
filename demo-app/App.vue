<template>
  <div id="app">
    <main class="demo-main">
      <div class="container">
        <div class="editor-wrapper">
          <umo-editor v-bind="editorOptions" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { UmoEditor } from '@umoteam/editor';

const editorOptions = ref({
  editorKey: 'demo-editor',
  locale: 'en-US',
  theme: 'light',
  height: '100vh',
  document: {
    title: 'Welcome to UMO Editor Demo',
    content: `
      <h1>Welcome to UMO Editor!</h1>
      <p>This is a demonstration of the UMO Editor with English language configuration.</p>
      
      <h2>Key Features:</h2>
      <ul>
        <li><strong>Rich Text Editing:</strong> Full WYSIWYG editing experience</li>
        <li><strong>Markdown Support:</strong> Write in markdown and see it rendered live</li>
        <li><strong>Multiple Layouts:</strong> Switch between page and web layouts</li>
        <li><strong>Export Options:</strong> Export to PDF, Word, HTML and more</li>
      </ul>
      
      <h2>Try it out!</h2>
      <p>Feel free to edit this document, add tables, insert images, or try the various formatting options available in the toolbar above.</p>
      
      <blockquote>
        <p>UMO Editor provides a modern, feature-rich editing experience for web applications.</p>
      </blockquote>
    `,
    placeholder: 'Start typing your document here...',
    enableMarkdown: true,
    enableBubbleMenu: true,
    enableBlockMenu: true,
    autofocus: false,
    readOnly: false
  },
  page: {
    layouts: ['page', 'web'],
    defaultBackground: '#ffffff',
    showBreakMarks: true,
    defaultMargin: {
      left: 3.18,
      right: 3.18,
      top: 2.54,
      bottom: 2.54
    }
  },
  toolbar: {
    defaultMode: 'ribbon',
    menus: ['base', 'insert', 'table', 'tools', 'page', 'export']
  }
});
</script>

<style scoped>
.demo-main {
  padding: 0;
  background-color: #f8f9fa;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  max-width: none;
}

.editor-wrapper {
  flex: 1;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Global styles for the demo */
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
</style>