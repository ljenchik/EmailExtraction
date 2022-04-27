const fs = require('fs');
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);

let dataArray = data.split(' ');
let counter = 0
for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].includes('@softwire.com')) {
        counter += 1
    }
}
console.log(counter)