/* eslint-disable global-require */

import path from 'path';
import { app, BrowserWindow, remote } from 'electron';

const myApp = app || remote.app;
const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

require('electron-reload')(__dirname);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const isDevMode = isEnvSet ? getFromEnv : !myApp.isPackaged;;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        show: false,
        title: '0KPKI',
        icon: path.join(__dirname, '../src/assets/img/appLogo.png')
    });
    mainWindow.setMenuBarVisibility(false);

    // mainWindow.maximize();

    // and load the index.html of the app.
    if (isDevMode) {
        mainWindow.loadURL('http://localhost:8081/');
    } else {
        mainWindow.loadURL(`file://${path.resolve(__dirname, '..', 'dist')}/index.html`);
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    mainWindow.on('ready-to-show', function() { 
        mainWindow.show(); 
        mainWindow.focus(); 
    });

    // Open the DevTools.
    if (isDevMode) {
        const { enableLiveReload } = require('electron-compile');
        const { REACT_DEVELOPER_TOOLS, default: installExtension } = require('electron-devtools-installer');

        enableLiveReload({ strategy: 'react-hmr' });
        installExtension(REACT_DEVELOPER_TOOLS).then(() => {
            mainWindow.webContents.openDevTools();
        });
    }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
