console.log("RUNNING ADVENT OF CODE DAY 4:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const inputArr = inputText.split('\n')
console.log("INPUT:\n")
console.log(inputArr)
console.log()
let total = 0
let scenic = 0

// function isBlockedAbove(grid, iindex, jindex) {
//     const checkingTree = grid[iindex][jindex]
//     let blocked = false
//     for (let i = 0; i < iindex; i++) {
//         const row = grid[i]
//         const tree = row[jindex]
//         if (tree >= checkingTree) {
//             blocked = true
//         }
//     }
//     return blocked
// }

// function isBlockedBelow(grid, iindex, jindex) {
//     const checkingTree = grid[iindex][jindex]
//     let blocked = false
//     for (let i = grid.length - 1; i > iindex; i--) {
//         const row = grid[i]
//         const tree = row[jindex]
//         if (tree >= checkingTree) {
//             blocked = true
//         }
//     }
//     return blocked
// }

// function isBlockedLeft(grid, iindex, jindex) {
//     const checkingTree = grid[iindex][jindex]
//     let blocked = false
//     for (let j = 0; j < jindex; j++) {
//         const tree = grid[iindex][j]
//         if (tree >= checkingTree) {
//             blocked = true
//         }
//     }
//     return blocked
// }

// function isBlockedRight(grid, iindex, jindex) {
//     const checkingTree = grid[iindex][jindex]
//     let blocked = false
//     for (let j = grid.length - 1; j > jindex; j--) {
//         const tree = grid[iindex][j]
//         if (tree >= checkingTree) {
//             blocked = true
//         }
//         // console.log(`CHECKING TREE AT [${iindex}][${jindex}]="${checkingTree}" versus [${iindex}][${j}]="${tree}" WHICH RESULTS IN = [${blocked}]`)
//     }
//     return blocked
// }

function isBlockedAbove(grid, iindex, jindex) {
    const checkingTree = grid[iindex][jindex]
    let score = 0
    for (let i = iindex - 1; i >= 0; i--) {
        const row = grid[i]
        const tree = row[jindex]
        if (tree >= checkingTree) {
            score += 1
            return score
        } else {
            score += 1
        }
    }
    return score
}

function isBlockedBelow(grid, iindex, jindex) {
    const checkingTree = grid[iindex][jindex]
    let score = 0
    for (let i = iindex + 1; i < grid.length; i++) {
        const row = grid[i]
        const tree = row[jindex]
        if (tree >= checkingTree) {
            score += 1
            return score
        } else {
            score += 1
        }
    }
    return score
}

function isBlockedLeft(grid, iindex, jindex) {
    const checkingTree = grid[iindex][jindex]
    let score = 0
    for (let j = jindex - 1; j >= 0; j--) {
        const tree = grid[iindex][j]
        if (tree >= checkingTree) {
            score += 1
            return score
        } else {
            score += 1
        }
    }
    return score
}

function isBlockedRight(grid, iindex, jindex) {
    const checkingTree = grid[iindex][jindex]
    let score = 0
    for (let j = jindex + 1; j < grid.length; j++) {
        const tree = grid[iindex][j]
        if (tree >= checkingTree) {
            score += 1
            return score
        } else {
            score += 1
        }
    }
    return score
}

function isBlocked(grid, i, j) {
    // check if can be seen from the 4 directions
    // let isBlocked = true
    // if (!isBlockedBelow(grid, i, j)) isBlocked = false
    // if (!isBlockedAbove(grid, i, j)) isBlocked = false
    // if (!isBlockedLeft(grid, i, j)) isBlocked = false
    // if (!isBlockedRight(grid, i, j)) isBlocked = false
    // return isBlocked
    let scenicScore = isBlockedBelow(grid, i, j) * isBlockedAbove(grid, i, j) * isBlockedLeft(grid, i, j) * isBlockedRight(grid, i, j)
    return scenicScore
}

function day4(input) {
    const gridStrs = input.map((row) => row.split(""))
    console.log(gridStrs)
    const grid = []
    gridStrs.forEach(row => {
        grid.push(row.map(Number))
    })
    console.log(grid)
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i]
        for (let j = 0; j < row.length; j++) {
            // if (i == 0 || i == grid.length - 1 || j == 0 || j == row.length - 1) {
            //     total += 1
            // } else if (!isBlocked(grid, i, j)) {
            //     total += 1
            // }
            scenic = Math.max(scenic, isBlocked(grid, i, j))
        }
    }
    return scenic
}

console.log("OUTPUT:\n")
console.log(day4(inputArr))
