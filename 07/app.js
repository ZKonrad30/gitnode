console.log('Username id...');

const os = require('os');
const username = os.userInfo().username;
console.log(username);
const fs = require ('fs');
fs.writeFileSync('abc.txt', username);