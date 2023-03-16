function remove(x) {
    let y = x.split("")
    if (y[y.length - 1] == "!") {
        y.pop()
    }
    return y.join('')
}

console.log(remove('Hi!'))
console.log(remove('Hi!!!'))
console.log(remove('!Hi'))
console.log(remove('!Hi!'))
console.log(remove('Hi! Hi!'))
console.log(remove('Hi'))