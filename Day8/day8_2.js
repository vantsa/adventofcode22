const fs = require('fs');
const input = fs.readFileSync("./input8.txt", "utf-8");

const lines = input.split('\r\n');
//making 2d array
const matrix = lines.map(line => line.split('').map(Number));

let max = 0;

for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[i].length - 1; j++) {
        const current = matrix[i][j];
        let upperTotal = 1;
        let bottomTotal = 1;
        let leftTotal = 1;
        let rightTotal = 1;
        for (let upper = i - 1; upper >= 0; upper--) {
            console.log(matrix[upper][j])
            if (matrix[upper][j] >= current) {
                break;
            }else upperTotal++;
        }
        let total = upperTotal * bottomTotal + leftTotal * rightTotal;
        if(total > max)
        {
            max = total;
        }
    }
}

console.log(max);