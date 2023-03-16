function lastsum(x) {
    let y = x.toString().split("")

    if (y.length != 1) {
        // let z = 1
        // for (let i = 0; i < y.length; i++) {
        //     z *= y[i]

        //cur [3,9]
        //acc = 27

        const sum = y.reduce((acc, cur) => {
            return acc * cur

        }, 1)
        return lastsum(sum)
    }

    return x

}





console.log(lastsum(999))