const fs = require('fs');
const readline =  require('readline');

const path = './input4.txt';

const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false
});

let count = 0;

rl.on('line', (line) => {
    const row = line.split(',');
    const first = row[0].split('-');
    const second = row[1].split('-');
    if((parseInt(first[0]) >= parseInt(second[0]) && parseInt(first[1]) <= parseInt(second[1]))
    || (parseInt(first[0]) <= parseInt(second[0]) && parseInt(first[1]) >= parseInt(second[1])))    
        {
            count++;
        }
})

rl.on('close', () => {
    console.log(count);
})