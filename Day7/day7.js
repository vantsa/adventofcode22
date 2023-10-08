const fs = require('fs');
const input = fs.readFileSync("./input7.txt", "utf-8");

let fileSizes = [];
const data = [];

const makeArray = () => {
    input.split(/\r?\n/).forEach(line => {
        data.push(line);
    })
};
makeArray();

const map = {};
let isMain = false;

for(let i = 0; i < data.length; i++)
{
    const splitData = data[i].split(' ');
    const key = splitData[1];
    if(splitData[2] === '/')
    {
        isMain = true;
    }
    if(splitData[0] === 'dir' && isMain)
    {
        map[key] = 0;
    }
    if(!isNaN(parseInt(splitData[0])) && isMain)
    {
        map[key] = parseInt(splitData[0]);
    }
    if(splitData[1] === 'cd' && splitData[2] !== '/')
    {
        isMain = false;
        
    }
}

console.log(map);
