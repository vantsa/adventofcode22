const fs = require('fs');
const input = fs.readFileSync("./input3.txt", "utf-8");

let total = 0;
let text = [];
let arr = [];

const makeArray = () => {
    input.split(/\r?\n/).forEach(line => {
     text.push(line)
    })
    return text;
}

function calc() {
    const newInp = makeArray();
    for(let i = 0; i < newInp.length; i+=3) {
        let first = newInp[i];
        let second = newInp[i+1];
        let third = newInp[i+2];
        for(let j = 0; j < first.length; j++) {
            if(second.includes(first[j]) && third.includes(first[j])) {
                if(first[j].charCodeAt(0) < 96)
                {
                    total += first[j].charCodeAt(0) - 38;
                } else total += first[j].charCodeAt(0) -96;
                break;
            }
        }
    }
}

calc();
console.log(total);