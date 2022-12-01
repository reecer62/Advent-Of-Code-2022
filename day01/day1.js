console.log("RUNNING ADVENT OF CODE DAY 1:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const inputArr = inputText.split('\n').map(Number)
console.log(inputArr)
console.log()

function day1(input) {
    let elfArray = [[]]
    let elfIdx = 0
    input.forEach(calorieAmt => {
        if (calorieAmt === 0) {
            elfIdx++
            elfArray.push([])
        } else {
            elfArray[elfIdx].push(calorieAmt)
        }
    })
    let totalCalories = []
    elfArray.forEach(elf => {
        const cals = elf.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
        totalCalories.push(cals)
    })
    const first = Math.max(...totalCalories)
    totalCalories.splice(totalCalories.indexOf(first), 1)
    const second = Math.max(...totalCalories)
    totalCalories.splice(totalCalories.indexOf(second), 1)
    const third = Math.max(...totalCalories)
    return first + second + third
    // return Math.max(...totalCalories)
}

console.log("OUTPUT:\n")
console.log(day1(inputArr))
