console.log("RUNNING ADVENT OF CODE DAY 2:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const inputArr = inputText.split('\n').map(s => s.split(/\s+/))
console.log(inputArr)
console.log()

function day2(input) {
    let score = 0
    input.forEach(turn => {
        if (turn.length === 2) {
            const left = turn[0]
            const right = turn[1]
            // lose
            if (right === 'X') {
                if (left === 'A')
                    score += 3
                if (left === 'B')
                    score += 1
                if (left === 'C')
                    score += 2
            }
            // draw
            if (right === 'Y') {
                if (left === 'A')
                    score += (3 + 1)
                if (left === 'B')
                    score += (3 + 2)
                if (left === 'C')
                    score += (3 + 3)
            }
            // win
            if (right === 'Z') {
                if (left === 'A')
                    score += (6 + 2)
                if (left === 'B')
                    score += (6 + 3)
                if (left === 'C')
                    score += (6 + 1)
            }

            // if (right === 'X' && left === 'A')
            //     score += (1 + 3)
            // if (right === 'X' && left === 'B')
            //     score += (1 + 0)
            // if (right === 'X' && left === 'C')
            //     score += (1 + 6)
            // if (right === 'Y' && left === 'A')
            //     score += (2 + 6)
            // if (right === 'Y' && left === 'B')
            //     score += (2 + 3)
            // if (right === 'Y' && left === 'C')
            //     score += (2 + 0)
            // if (right === 'Z' && left === 'A')
            //     score += (3 + 0)
            // if (right === 'Z' && left === 'B')
            //     score += (3 + 6)
            // if (right === 'Z' && left === 'C')
            //     score += (3 + 3)
            
        }
    })
    return score
}

console.log("OUTPUT:\n")
console.log(day2(inputArr))
