console.log("RUNNING ADVENT OF CODE DAY 3:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const inputArr = inputText.split('\n')
console.log(inputArr)
console.log()

const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function populateSet(itemList) {
    const set = new Set()
    for (let i = 0; i < itemList.length; i++) {
        set.add(itemList[i])
    }
    return set
}

function getSameItem(comp1, comp2) {
    const set1 = populateSet(comp1)
    const set2 = populateSet(comp2)
    let priorityItem = null
    set1.forEach(item1 => {
        if (set2.has(item1)) {
            priorityItem = item1
        }
    })
    return priorityItem
}

function getSameItems(list1, list2) {
    const set1 = populateSet(list1)
    const set2 = populateSet(list2)
    const intersection = []
    set1.forEach(item1 => {
        if (set2.has(item1)) {
            intersection.push(item1)
        }
    })
    return intersection
}

function getMiddleIndex(line) {
    return Math.floor(line.length / 2)
}

function day3(input) {
    let sum = 0
    // input.forEach(rucksack => {
    //     const center = getMiddleIndex(rucksack)
    //     const item = getSameItem(rucksack.slice(0, center), rucksack.slice(center, rucksack.length))
    //     sum += alphabets.indexOf(item) + 1
    // })
    for (let i = 2; i < input.length; i++) {
        if (i % 3 == 2) {
            const elf1 = input[i - 2]
            const elf2 = input[i - 1]
            const elf3 = input[i]
            const intersection = getSameItems(getSameItems(elf1, elf2), elf3)
            sum += alphabets.indexOf(intersection[0]) + 1
        }
    }
    return sum
}

console.log("OUTPUT:\n")
console.log(day3(inputArr))
