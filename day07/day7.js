console.log("RUNNING ADVENT OF CODE DAY 4:\n")

const fs = require('fs-extra')

const inputText = fs.readFileSync('./input.txt',  {encoding:'utf8'})
const inputArr = inputText.split('\n')
let root

function updateParentDirSize(size, parentDir) {
    parentDir.size += size
    if (parentDir.parentDir !== null) {
        updateParentDirSize(size, parentDir.parentDir)
    }
}

class Directory {
    constructor(name, parentDir) {
        this.size = 0
        this.name = name
        this.parentDir = parentDir
        this.files = []
        this.dirs = []
    }

    addFile(file) {
        this.files.push(file)
        this.size += file.size
        if (this.parentDir !== null) {
            updateParentDirSize(file.size, this.parentDir)
        }
    }

    addDir(directory) {
        this.dirs.push(directory)
    }
}

class File {
    constructor(size, name, parentDir) {
        this.size = size
        this.name = name
        this.parentDir = parentDir
    }
}

function isCommand(line) {
    if (line[0] === '$') {
        return true
    }
    return false
}

function doesDirExist(directory, newDirName) {
    directory.dirs.forEach((dir) => {
        if (dir.name === newDirName) {
            return true
        }
    })
    return false
}

function doesFileExist(directory, newFileName) {
    directory.files.forEach((file) => {
        if (file.name === newFileName) {
            return true
        }
    })
    return false
}

function updateDirectory(directory, line) {
    const outputLine = line.split(" ")
    if (outputLine[0] === "dir" && !doesDirExist(directory, outputLine[1])) {
        const newDir = new Directory(outputLine[1], directory)
        directory.addDir(newDir)
    } else if (!doesFileExist(directory, outputLine[1])) {
        const newFile = new File(Number(outputLine[0]), outputLine[1], directory)
        directory.addFile(newFile)
    }
}


function generateSystem(directory, inputLines) {
    if (inputLines.length > 0) {
        const line = inputLines[0]
        if (isCommand(line)) {
            const command = line.split(" ")[1]
            switch (command) {
                case "ls": {
                    inputLines.shift()
                    // keep shifting until next command found
                    while (true && inputLines.length > 0) {
                        currLine = inputLines.shift()
                        if (isCommand(currLine)) {
                            inputLines.unshift(currLine)
                            break;
                        }
                        updateDirectory(directory, currLine)
                    }
                    break;
                }
                case "cd": {
                    const dirName = line.split(" ")[2]
                    if (dirName === "..") {
                        directory = directory.parentDir
                    } else if (dirName === "/") {
                        directory = root
                    } else {
                        directory.dirs.forEach(dir => {
                            if (dir.name === dirName) {
                                directory = dir
                            }
                        })
                    }
                    inputLines.shift()
                    break;
                }
                default: {
                    console.error("ERROR READING COMMAND: " + command)
                    console.error("EXITING PROCESS")
                    process.exit(1)
                    break;
                }
            }
        }
        generateSystem(directory, inputLines)    
    }   
}

const dirList = []

function getAllDirs(directory) {
    if (directory.dirs.length > 0) {
        directory.dirs.forEach(dir => {
            dirList.push(dir)
            getAllDirs(dir)
        })
    }
}

function day4(input) {
    // initialize system
    input.shift()
    root = new Directory("/", null)
    generateSystem(root, input)
    console.log(root)
    let unused = 70000000 - root.size
    getAllDirs(root)
    const dirListSizes = dirList.map((dir) => dir.size)
    dirListSizes.sort(function(a, b) {
        return a - b;
    })

    dirListSizes.forEach(size => {
        if (size >= 30000000 - unused) {
            console.log(size)
            process.exit(1)
        }
    })

    return dirList.reduce((acc, curr) => curr.size <= 100000 ? acc + curr.size : acc + 0, 0)
}

console.log("OUTPUT:\n")
console.log(day4(inputArr))
