function check(x) {

    return (x.filter(skipFantaCola))

}



function skipFantaCola(x) {
    if (!x.includes("fanta") && !x.includes("cola")) {
        return true
    }
    return false
}

console.log(check(["fanta", "cola", "water"]))
console.log(check(["fanta", "cola"]))
console.log(check(["lemonade", "beer", "water"]))