const fs = require('fs');
const input = fs.readFileSync("./input8.txt", "utf-8");

const lines = input.split('\r\n');
console.log(lines.length);
//making 2d array
const matrix = lines.map(line => line.split('').map(Number));

let total = 0;
total += matrix.length + matrix[1].length - 1 + matrix[0].length -1 + matrix[1].length - 2;
console.log(total)
for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[i].length - 1; j++) {
        const current = matrix[i][j];
        let isHigher = 0;
        for (let upper = i - 1; upper >= 0; upper--) {
            if (matrix[upper][j] >= current) {
                isHigher++;
                break;
            }
        }
        for(let bottom = i+1; bottom < matrix.length; bottom++)
        {
            if(matrix[bottom][j] >= current)
            {
                isHigher++;
                break;
            }
        }
        for(let left = j - 1; left >= 0; left--)
        {
            if(matrix[i][left] >= current)
            {
                isHigher++;
                break;
            }
        }
        for(let right = j + 1; right < matrix[i].length; right++)
        {
            if(matrix[i][right] >= current)
            {
                isHigher++;
                break;
            }
        }
        if (isHigher < 4) {
            total += 1;
        }


    }
}

console.log(total);
