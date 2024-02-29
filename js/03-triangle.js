// Declare variables
let strOutput

// Execute loop
for (let i = 1; i <= 7; i++) {
    strOutput = ''
    // Create series of #
    for (let j = 0; j < i; j++) {
        strOutput += '#'
    }
    console.log(strOutput)
}