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
    const a1 = parseInt(first[0]);
    const a2 = parseInt(first[1]);
    const b1 = parseInt(second[0]);
    const b2 = parseInt(second[1]);
    if((a1 >= b1 && a1 <= b2) || 
    (a2 >= b1 && a2 <= b2) || 
    (b1 >= a1 && b1 <= a2) ||
    (b2 >= a1 && b2 <= a2))
    {
        count++;
        console.log(row);
    }
})

rl.on('close', () => {
    console.log(count);
})

