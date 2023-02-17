// CHAPTER SIX - ITERATING THE QUEENS 

// previous chapter code: 
const hailTheQueen = function(nameString) {
    return `Hail Her Majesty, ${nameString}.`
}

const queens = []

const createQueen = (queenID, queenName) => {
    const queenObject = {
        id: queenID,
        name: queenName
    }

    queens.push(queenObject);   
}

const linda = createQueen(1, "Linda K")
const ashley = createQueen(2, "Ashley V")
const becky = createQueen(3, "Becky T")


// STEP 1. Write a for..of loop to iterate an array 
for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  
    console.log(hailMessage)
}

