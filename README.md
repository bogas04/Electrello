Electrello (Unofficial Trello Desktop Application)
==

Inspired by sindresorhus, I decided to build a Trello app using Electron, coz why not.

Build Instructions
==

```bash
git clone https://github.com/bogas04/Electrello.git
cd Electrello
npm i
npm i electron-packager -g
# For Windows 32 bit
electron-packager . SikhJS --platform=win32 --arch=ia32 --version=0.33.1
# For OSX 
electron-packager . SikhJS --platform=darwin --arch=all --version=0.33.1
# For Linux 32 bit
electron-packager . SikhJS --platform=linux --arch=ia32 --version=0.33.1
```
Todo
==

* [x] Spend 10 minutes to get the thing started.
* [ ] Package the app for proper distribution.
* [ ] Add support for notifications.
* [ ] Add OS specific features.
