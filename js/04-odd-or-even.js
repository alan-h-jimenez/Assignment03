// Declare variables
let strOutput

// Execute loop
for (let i = 0; i <= 15; i++) {
    strOutput = i.toString() + ' is '

    // Check if number is even or odd
    if (i % 2 == 0) {
        strOutput += 'even'
    }
    else {
        strOutput += 'odd'
    }

    console.log(strOutput)
}