// Declare variables
let coinFlip
let flipsQuantity = parseInt(prompt('How many times do you want to flip the coin? '))

// Excute the coin flips
for (let i = 0; i < flipsQuantity; i++) {
    coinFlip = Math.round(Math.random())

    // Check coinflip result
    if (coinFlip == 0) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}