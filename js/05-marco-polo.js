// Declare variables
let strOutput

// Execute loop
for (let i = 1; i <= 100; i++) {
    // Check if it is a multiple of 3 or 5
    if (i % 3 == 0 || i % 5 == 0) {
        strOutput = ''

        // Marco! if number is multiple of 3
        if (i % 3 == 0) {
            strOutput += 'Marco! '
        }

        // Polo! if number is multiple of 5
        if (i % 5 == 0) {
            strOutput += 'Polo! '
        }
    }
    else {
        strOutput = i.toString()
    }

    console.log(strOutput)
}