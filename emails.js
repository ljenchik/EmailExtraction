const fs = require('fs');
const data = fs.readFileSync('test.txt', 'utf8');
//console.log(data);
//const emailRegex = /@softwire\.com\b/g

const allEmails = /@([\w-]+)\b/g
const foundAll = data.match(allEmails)
console.log(foundAll.length)

let emails = {}
 for (let i = 0; i < foundAll.length; i++) {
     if (!Object.keys(emails).includes(foundAll[i])) {
         emails[foundAll[i]] = 1
     }
     else {
        emails[foundAll[i]] += 1
     }
 }
var items = Object.keys(emails).map(function(key) {
    return [key, emails[key]]
})
items.sort(function(first, second) {
    return second[1] - first[1]
})

console.log(items)
console.log(items.slice(0, 10))

const prompt = require('prompt-sync')();
const number = prompt('Enter a number: ');

const overNumber = items.filter(myFunction)
function myFunction(arr){
    return arr[1] > number
}

console.log(overNumber)