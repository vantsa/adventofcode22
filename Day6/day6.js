const fs = require("fs");

const input = fs.readFileSync("./input6.txt", "utf-8").toString();

const steps = 4;

function solve(){
    const split = input.split("");
    let start = 0;
    let end = 0;

    const map = {};
    // mjqjpqmgbljsphdztnvjfqwrcgsmlb
    // m = 0
    map[split[start]] = start;

    while( end < split.length)
    {
        if(end - start + 1 === 4)
        {
            break;
        }
        end++;
        const currentChar = split[end];
        
        if(map[currentChar] >= 0) /// if there is key (char) 
        {
            const newStart = map[currentChar] + 1;
            console.log(newStart);
            while(start < newStart)
            {
                map[split[start]] = -1;
                start++;
            }
        }
        map[currentChar] = end;
    }
    return end+1;

}

console.log(solve());