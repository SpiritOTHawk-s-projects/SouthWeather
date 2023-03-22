const {app, BrowserWindow} = require('electron');
const path = require('path').join;
const url = require('url').format;

let win
const iconPath = path(__dirname, 'docs/icons/icon.png');
console.log("Found icon: ", iconPath);

async function createWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 600,
        fullscreenable: false,
        resizable: false,
        icon: iconPath,
        autoHideMenuBar: true,
        spellcheck: false,
        experimentalFeatures: true,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            nodeIntegrationInWorker: true,
            webgl: false,
            enableWebSQL: false,
            v8CacheOptions: "bypassHeatCheck"
        }
    });

    win.loadFile('./web/index.html');
    console.log("App loaded");
    getProcessInfo();

    win.on('closed', () => {
        win = null;
        console.log("App closed");
    });
};

async function getProcessInfo() {
    console.log("App version: ", app.getVersion());
    console.log("Process started with PID: ", process.pid);
    console.log(process.versions);
};

console.log("App ready! Loading application.");
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
