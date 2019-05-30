let fs = require('fs')

let index = 'index.d.ts'
let luminIndex = './lumin/index.d.ts';

fs.closeSync(fs.openSync(luminIndex, 'w'))

var gatherFilesList = function(fileName, path) {
    var files = fs.readdirSync(path);
    files.forEach(file => {
        let filePath = `${path}/${file}`;
        let parsedPath = filePath.substring(filePath.indexOf('/') + 1);
        let text = `/// <reference path='./${parsedPath}' />`;
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            gatherFilesList(fileName, filePath);
        } else if (parsedPath !== index) {
            fs.appendFileSync(fileName, text + '\n');
        }
    });
}
gatherFilesList(luminIndex, 'lumin');
fs.closeSync(fs.openSync(index, 'w'));
fs.writeFileSync(index, '/// <reference path=\'./lumin/index.d.ts\' />');
