/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFolder = void 0;
const fs = __webpack_require__(3);
const vscode = __webpack_require__(1);
const path = __webpack_require__(4);
function createFolder(from, to) {
    fs.readdir(from, (err, paths) => {
        if (err) {
            vscode.window.showErrorMessage(JSON.stringify(err));
            return;
        }
        paths.forEach(_path => {
            let _toPath = path.join(to, `/${_path}`);
            let frompath = path.join(from, `/${_path}`);
            // 判断路径是否存在
            fs.stat(frompath, function (err, stat) {
                if (stat.isFile()) {
                    try {
                        fs.writeFileSync(_toPath, fs.readFileSync(frompath));
                    }
                    catch (err) {
                        vscode.window.showErrorMessage(JSON.stringify(err));
                    }
                }
                else {
                    fs.mkdirSync(_toPath);
                    createFolder(frompath, _toPath);
                }
            });
        });
    });
}
exports.createFolder = createFolder;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("path");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const fs_1 = __webpack_require__(2);
const path = __webpack_require__(4);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    let templatePath = context.asAbsolutePath("template");
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "vb-template" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    // let inputOptions = {
    // 	prompt: "输入模板名称",
    // 	placeholder: "模板名"
    // }
    let createComponent = vscode.commands.registerCommand('vb-template.createVScodeDebugger', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        let root = vscode.workspace.workspaceFolders;
        if (root && root.length) {
            (0, fs_1.createFolder)(path.resolve(templatePath), root[0].uri.fsPath);
        }
        else {
            vscode.window.showErrorMessage('direction dose not exist');
        }
        // vscode.window.showInputBox(inputOptions).then(value => {
        // 	if(!value) {
        // 		return
        // 	}
        // 	if(root && root.length) {
        // 		createFolder(path.resolve(templatePath, `/${value}`), root[0].uri.fsPath);
        // 	} else {
        // 		vscode.window.showErrorMessage('direction dose not exist')
        // 	}
        // })
    });
    context.subscriptions.push(createComponent);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map