# Invert Any Web - theme inverter Extension

## Overview
A browser extension that inverts colors on web pages and PDFs, including offline content. Works on **Chrome, Edge, Opera, and Firefox** with a toggle button for control.

## Features
- 🔄 **Invert Colors** on all websites and PDFs
- 🎚️ **Toggle Button** to enable/disable inversion
- 🌐 **Works Offline**
- 🖥️ **Cross-Browser Support** (Chrome, Edge, Opera, Firefox)

## Installation
### Chrome / Edge / Opera
1. Go to `chrome://extensions/` or `edge://extensions/`
2. Enable **Developer Mode**
3. Click **"Load Unpacked"** and select the extension folder

### Firefox
1. Run `node convert_manifest.js` to generate `manifest_firefox.json`
2. Rename it to `manifest.json`
3. Open `about:debugging#/runtime/this-firefox`
4. Click **"Load Temporary Add-on"** and select `manifest.json`

## Usage
1. Open any webpage or PDF
2. Click the extension icon
3. Click **"Toggle Inversion"** to enable/disable

## File Structure
```
/invert-extension
│── manifest.json
│── popup.html
│── popup.js
│── content.js
│── background.js
│── styles.css
│── icon.png
│── convert_manifest.js (Optional for Firefox)
```

## Future Enhancements
- Auto Dark Mode detection
- Site Whitelist/Blacklist
- Keyboard Shortcut for toggling

## License
MIT License
