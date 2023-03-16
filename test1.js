function sum(k) {
    let x = k.toString().split("")
    // let sum1 = 0

    // for (let i = 1; i <= x.length; i++) {
    //     y = Math.pow(x[i - 1], i)
    //     sum1 += y

    // }
    // return sum1

    // cur = [1,2,3]
    // acc = 32
    return x.reduce((acc, cur, i) => {
        return acc + Math.pow(cur, i + 1)
    }, 0)

}

console.log(sum(65))