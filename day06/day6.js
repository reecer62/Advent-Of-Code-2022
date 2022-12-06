console.log("RUNNING ADVENT OF CODE DAY 4:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const inputArr = inputText.split('\n')
console.log("INPUT:\n")
console.log(inputArr[0])
console.log()

function day4(input) {
    for (let i = 13; i < input.length; i++) {
        // const fourth = input[i]
        // const third = input[i - 1]
        // const second = input[i - 2]
        // const first = input[i - 3]
        // const set = new Set()
        // set.add(fourth)
        // set.add(third)
        // set.add(second)
        // set.add(first)
        // if (set.size === 4) {
        //     console.log(set)
        //     console.log(i + 1)
        //     return i + 1
        // }
        const set = new Set()
        const messageData = input.slice(i - 13, i + 1)
        for (let i = 0; i < messageData.length; i++) {
            set.add(messageData[i])   
        }
        if (set.size === 14) {
            return i + 1
        }
    }
}

console.log("OUTPUT:\n")
console.log(day4(inputArr[0]))
