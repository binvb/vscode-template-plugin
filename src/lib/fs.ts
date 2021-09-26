import * as fs from 'fs'
import * as vscode from 'vscode'
import * as path from 'path'

export function createFolder(from: string, to: string) {
    fs.readdir(from, (err, paths) => {
        if(err) {
            vscode.window.showErrorMessage(JSON.stringify(err))
            return
        }

        paths.forEach(_path => {
            let _toPath = path.join(to, `/${_path}`)

            let frompath = path.join(from, `/${_path}`)
            // 判断路径是否存在
            fs.stat(frompath, function(err, stat) {
                if(stat.isFile()) {
                    try {
                        fs.writeFileSync(_toPath, fs.readFileSync(frompath))
                    } catch(err) {
                        vscode.window.showErrorMessage(JSON.stringify(err))
                    }
                } else {
                    fs.mkdirSync(_toPath)
                    createFolder(frompath, _toPath)
                }
            })
        })
    })
}