// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createFolder } from './lib/fs'
import * as path from 'path'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
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
		let root = vscode.workspace.workspaceFolders
		if(root && root.length) {
			createFolder(path.resolve(templatePath), root[0].uri.fsPath);
		} else {
			vscode.window.showErrorMessage('direction dose not exist')
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

// this method is called when your extension is deactivated
export function deactivate() {}
