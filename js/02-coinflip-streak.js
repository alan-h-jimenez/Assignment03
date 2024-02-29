// Declare variables
let coinFlip

// Excute the coin flips
do {
    coinFlip = Math.round(Math.random())

    // Check coinflip result
    if (coinFlip == 0) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
} while (coinFlip != 1)