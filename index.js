const {app, BrowserWindow} = require('electron');
const path = require('path').join;
const url = require('url').format;

let win
const iconPath = path(__dirname, 'docs/icons/icon.png');

async function createWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 600,
        icon: iconPath,
        titleBarStyle: '',
        autoHideMenuBar: true,
        titleBarOverlay: {
            color: '#2F353B',
            symbolColor: '#C7D0CC'
        },
        webPreferences: {
            nodeIntegrationInWorker: true
        }
    });

    win.loadFile('./web/index.html');

    win.on('closed', () => {
        win = null;
    });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
