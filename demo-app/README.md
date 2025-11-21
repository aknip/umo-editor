# UMO Editor Demo

A simple demonstration application showcasing the UMO Editor with English language configuration.

## Features

- 🌐 **English Interface**: Fully configured for English language display
- 📝 **Rich Text Editing**: Complete WYSIWYG editing experience
- 🎨 **Modern UI**: Clean and intuitive user interface
- 📊 **Multiple Tools**: Tables, charts, and various formatting options
- 💾 **Export Options**: PDF, Word, HTML and more
- 🚀 **Vue 3**: Built with the latest Vue.js framework

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the demo directory:
```bash
cd demo-app
```

2. Install dependencies:
```bash
npm install
```

### Running the Demo

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`

3. The UMO Editor demo will load with English interface and sample content

### Build for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Configuration

The UMO Editor is configured in [`main.js`](./main.js) with the following English-specific settings:

- **Locale**: `en-US` for English interface
- **Placeholder**: English placeholder text
- **Sample Content**: Demo content in English
- **Toolbar**: Full ribbon toolbar with all editing tools
- **Page Layout**: Support for both page and web layouts

## Key Files

- `main.js` - Vue app initialization and UMO Editor configuration
- `App.vue` - Main application component with demo layout
- `index.html` - HTML template
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite build configuration

## UMO Editor Documentation

For comprehensive documentation, visit:
- [Official Documentation](https://www.umodoc.com/en/docs)
- [Getting Started Guide](https://www.umodoc.com/en/docs/editor/getting-started)
- [Configuration Options](https://www.umodoc.com/en/docs/editor/options/default)

## License

This demo is provided as-is for demonstration purposes.