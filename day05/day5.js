console.log("RUNNING ADVENT OF CODE DAY 4:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const input = inputText.split('\n')
let inputArr = []
input.forEach(line => {
    const list = line.split(/\s+/).map(Number)
    const filteredList = list.filter(token => !(isNaN(token)))
    inputArr.push(filteredList)
})
const stacks = [
    ['N', 'S', 'D', 'C', 'V', 'Q', 'T'],
    ['M', 'F', 'V'],
    ['F', 'Q', 'W', 'D', 'P', 'N', 'H', 'M'],
    ['D', 'Q', 'R', 'T', 'F'],
    ['R', 'F', 'M', 'N', 'Q', 'H', 'V', 'B'],
    ['C', 'F', 'G', 'N', 'P', 'W', 'Q'],
    ['W', 'F', 'R', 'L', 'C', 'T'],
    ['T', 'Z', 'N', 'S'],
    ['M', 'S', 'D', 'J', 'R', 'Q', 'H', 'N']
]

function day4(instructions, stacks) {
    instructions.forEach(instruction => {
        const quantity = instruction[0]
        const from = instruction[1] - 1
        const to = instruction[2] - 1
        const moveStack = []
        for (let i = 0; i < quantity; i++) {
            const popped = stacks[from].pop()
            moveStack.push(popped)
            // stacks[to].push(popped)
        }
        moveStack.reverse()
        stacks[to].push(...moveStack)
    })
    const answer = []
    stacks.forEach(stack => {
        answer.push(stack.pop())
    })
    return answer
}

console.log("OUTPUT:\n")
console.log(day4(inputArr, stacks))
