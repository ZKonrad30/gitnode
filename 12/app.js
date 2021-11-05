const fs = require('fs');

let folderData = process.argv[2];

if (process.argv [3] != undefined) {
    console.log('Za dużo parametrów!');
    process.exit();
};


if (folderData != undefined) {
    const content = fs.readdirSync(folderData)
    console.log(content);
} else {
    console.log('Za mało parametrów!')
    process.exit();
};