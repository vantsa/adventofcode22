const fs = require('fs');
const readline =  require('readline');

const path = './file1.txt';

const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false
});

let temp = 0;
let max = 0;
let totalCalories = [];

rl.on('line', (line) => {
    const number = parseInt(line.trim(), 10);
    if(!isNaN(number))
    {
        temp += number;
    }else 
    {
        totalCalories.push(temp);
        // Maximum value
        // if(max < temp)
        // {
        //     max = temp;
        // }
        temp = 0;
    }
})

rl.on('close', () =>{
    totalCalories.sort((a,b) => b - a)
    console.log(totalCalories)
    const topThreeElves = totalCalories[0] + totalCalories[1] + totalCalories[2]
    console.log(topThreeElves);
    ///console.log(max); The highest value 
})
