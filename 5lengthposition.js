function lengthposition(x) {
    let y = x.split("")
    // let result = ""
    // for (let i = 0; i < y.length; i++) {
    //     if (i < y.length - 1) {
    //         result = result + y[i].repeat(i + 1) + "-"
    //     } else {
    //         result = result + y[i].repeat(i + 1)

    //     }


    // }

    const result = y.reduce((acc, curr, i) => {
        if (i < y.length - 1) {
            return acc + curr.repeat(i + 1) + "-"
        }
        return acc + curr.repeat(i + 1)
    }, "")

    let resultlast = x + "->" + result
    return resultlast
}


console.log(lengthposition("bigasd"))