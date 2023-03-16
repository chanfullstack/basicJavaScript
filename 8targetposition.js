function targetposition(x, y) {
    output = []
    let z = x
    for (let i = 0; i < x.length; i++) {

        for (let s = i + 1; s < z.length; s++) {
            // if (i != s) {
            if (x[i] + x[s] == y) {
                output.push(i)
                output.push(s)
                // }
            }
        }
    }

    let result = [...new Set(output)]

    return result

}

console.log(targetposition([2, 7, 11, 15], 9))
console.log(targetposition([3, 2, 4], 6))

loop1 = [3, 2, 4]
loop2 = [3, 2, 4]