const fs = require('fs');
const input = fs.readFileSync("./input5.txt", "utf-8");

let isAfterLine = false;
let first = [];
let second = [];

const makeArray = () => {
input.split(/\r?\n/).forEach(line => {
    if(line === '')
    {
        isAfterLine = true;
    }
    if(isAfterLine)
    {
        second.push(line);
    }else first.push(line);
   })
   second.shift();
   return [first, second];
}

const [stack, tasks] = makeArray();

function solve () {
    const stackNumbers = stack[stack.length - 1].match(/\d+/g).map(num => +num);
    const maxStacks = Math.max(...stackNumbers);

    let stacks = [];
    for(let i = 0; i < maxStacks; i++){
        stacks.push([]);
    }

    for(let i = stack.length -2; i >= 0; i--)
    {
        let stackNum = 0;
        let strLoop = 0;

        while(strLoop < stack[i].length)
        {
            const create = stack[i].substring(strLoop, strLoop + 3).trim();
            if(create !== "")
            {
                stacks[stackNum].push(create.charAt(1));
            }
            stackNum++;
            strLoop += 4;
        }
    }

    for(let move of tasks)
    {
        const splitTasks = move.split(" ");
        const count = +splitTasks[1];
        const moveFrom = +splitTasks[3] - 1;
        const moveTo = +splitTasks[5] - 1;

        const cratesToMove = [];
        for(let i = 0; i < count; i++)
        {
            cratesToMove.push(stacks[moveFrom].pop())
        }

        stacks[moveTo].push(...cratesToMove.reverse()); /// without the .reverse() method, you can get the first parts solution
    }

    let topStacks = "";
    for(let stack of stacks) {
        topStacks += stack[stack.length-1]
    }

    console.log(topStacks);
}

solve();



