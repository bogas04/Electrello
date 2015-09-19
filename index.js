'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : '');

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    'title': 'Trello',
    'width': 1000, 
    'height': 700, 
    'node-integration': false
  });

  mainWindow.loadUrl('https://trello.com');

  mainWindow.on('closed', () => mainWindow = null);
});
