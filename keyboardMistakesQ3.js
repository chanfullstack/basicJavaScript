function KeyboardMistakes(x) {
    let result = ""
    result = x.replace("4", "A")
    result = result.replace("5", "S")
    result = result.replace("0", "O")
    result = result.replace("1", "I")

    return result
}

console.log(KeyboardMistakes("MUB45H1R"))
console.log(KeyboardMistakes("DUBL1N"))
console.log(KeyboardMistakes("51NG4P0RE"))