console.log("RUNNING ADVENT OF CODE DAY 4:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const input = inputText.split('\n')
const inputArr = []
input.forEach(pair => {
    const splitPair = pair.split(',')
    const elf1 = splitPair[0].split('-').map(Number)
    const elf2 = splitPair[1].split('-').map(Number)
    inputArr.push([elf1, elf2])
})
console.log(inputArr)
console.log()

function getNewSet(lowerBound, upperBound) {
    const set = new Set()
    for (let i = lowerBound; i < upperBound+1; i++) {
        set.add(i)
    }
    return set
}

function day4(input) {
    const truths = []
    input.forEach(pair => {
        const elf1 = pair[0]
        const elf2 = pair[1]
        // if (elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) {
        //     truths.push(true)
        // } else if (elf2[0] <= elf1[0] && elf2[1] >= elf1[1]) {
        //     truths.push(true)
        // }
        const set1 = getNewSet(elf1[0], elf1[1])
        const set2 = getNewSet(elf2[0], elf2[1])
        let hasDupe = false
        set1.forEach(section => {
            if (set2.has(section)) {
                hasDupe = true
            }
        })
        if (hasDupe) truths.push(true)
    })

    return truths.length
}

console.log("OUTPUT:\n")
console.log(day4(inputArr))
