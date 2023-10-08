const fs = require('fs');
const readline =  require('readline');

const path = './input3.txt';

const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false
});

const arr = [];

rl.on('line', (line) => {
    s1 = line.slice(0, line.length/2);
    s2 = line.slice(line.length/2, line.length);
    for(let i = 0 ; i < s1.length ; i++) {
        if(s1.includes(s2[i])){
            arr.push(s2[i]);
            break;
        }
    }
})

rl.on('close', () => {
    let total = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].charCodeAt(0) < 96)
        {
            total += arr[i].charCodeAt(0) -38;
        }else total += arr[i].charCodeAt(0) - 96;
    }
    console.log(total);

})