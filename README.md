# Renderer Backgrounding Test Case

Run this with `electron-prebuilt`:

```js
npm install -g electron-prebuilt
cd disable-renderer-backgrounding-test-case
electron ./browser.js
```

At least with Electron 0.36.9, if you open the dev tools, hide the window, then show the window after waiting a few seconds, you'll see the animation frame fire multiple seconds after it was requested, indicating that throttling is still happening.
