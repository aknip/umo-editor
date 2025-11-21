create a simple demo application which shows the UMO editor (in english language).

npm install --save @umoteam/editor

Global Installation
main.js

import { createApp } from 'vue';
import { useUmoEditor } from '@umoteam/editor';
 
const app = createApp(App);
app.use(useUmoEditor, {
  // Configuration options
  // ...
});
app.mount('#app');

Direct Inclusion
Choose either of the following examples using Composition API or Options API.

<template>
  <umo-editor v-bind="options" />
  <!-- Or -->
  <!-- 
  <umo-editor 
    :editor-key="options.editorKey" 
    ... 
  /> -->
</template>
 
// Using Composition API
<script setup>
  import { ref } from 'vue'
  import { UmoEditor } from '@umoteam/editor';
 
  const options = ref({
    // Configuration options
    // ...
  });
</script>
 
// Or using Options API
<script>
  import { UmoEditor } from '@umoteam/editor';
 
  export default {
    components: {
      UmoEditor
    },
    data() {
      return {
        options: {
          // Configuration options
          // ...
        }
      }
    }
  }
</script>

Configurations:
onst defaultOptions = {
  editorKey: 'default',
  locale: 'zh-CN',
  theme: 'light',
  height: '100%',
  fullscreenZIndex: 10,
  dicts: {
    fonts: [
      {
        label: { en_US: 'Default Font', zh_CN: '默认字体' },
        value: null,
      },
...

Starting from version v2.0.0, the label in dicts and items like document.placeholder support both String and Object types. The Object type is mainly used for configuring multilingual information in the format { en_US: 'English', zh_CN: 'Chinese description' }.



for detailed information see folder "docs"