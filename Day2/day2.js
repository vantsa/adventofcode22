const fs = require('fs');
const readline =  require('readline');

const path = './file2.txt';

const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false
});

let totalPoints = 0;

// A - ROCK ---- B - PAPER ---- C - SCRISSORS 
// X - ROCK ---- Y - PAPER ---- Z - SCRISSORS

rl.on('line', (line) => {
    const row = line.trim('')
    const aiPick = row[0];
    //const userPick = row[2];
    // if(userPick === 'X')
    // {
    //     totalPoints += 1;
    // } else if(userPick === 'Y')
    // {
    //     totalPoints += 2;
    // } else totalPoints +=3;
    // if ((aiPick === 'A' && userPick === 'X') || 
    //     (aiPick === 'B' && userPick === 'Y')||
    //     (aiPick === 'C' && userPick === 'Z') )
    // {
    //         totalPoints += 3;
    // } else if((aiPick === 'A' && userPick === 'Y') ||
    //         (aiPick === 'B' && userPick === 'Z') ||
    //         (aiPick === 'C' && userPick === 'X'))
    // {
    //         totalPoints += 6;
    // } else totalPoints = totalPoints;
    const result = row[2];
    if(result === 'X')
    {
        if(aiPick === 'A')
        {
            totalPoints += 3;
        }else if (aiPick === 'B')
        {
            totalPoints += 1;
        }else if (aiPick === 'C')
        {
            totalPoints += 2;
        }
    }else if (result === 'Y')
    {
        if(aiPick === 'A')
        {
            totalPoints += 4;
        }else if (aiPick === 'B')
        {
            totalPoints += 5;
        }else if (aiPick === 'C')
        {
            totalPoints += 6;
        }
    } else if (result === 'Z')
    {
        if(aiPick === 'A')
        {
            totalPoints += 8;
        }else if (aiPick === 'B')
        {
            totalPoints += 9;
        }else if (aiPick === 'C')
        {
            totalPoints += 7;
        }
    }
    
})

rl.on('close', () => {
        console.log(totalPoints);
})