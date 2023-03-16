function diffArray(x, y) {
    let result = []

    x.forEach(item => {
        if (!y.includes(item)) {
            result.push(item)
        }

    });
    // for (let i = 0; i < x.length; i++) {
    //     let z = x[i]

    //     if (y.includes(z) == false) {
    //         result.push(z)
    //     }
    // }
    for (let i = 0; i < y.length; i++) {
        let z = y[i]

        if (x.includes(z) == false) {
            result.push(z)
        }
    }

    result.sort((a, b) => b - a)

    return result

}

console.log(diffArray([1, 2, 3], [100, 2, 1, 10]))