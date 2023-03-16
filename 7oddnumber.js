function oddnumber(x) {
    // let result = []
    // let resultlast = []
    let newEven = x.reduce((acc, cur, i) => {
        if (cur % 2 == 0) {
            return [...acc, { number: cur, index: i }]
        } return acc
    }, [])
    let sortArray = x.filter((item) => {
        return item % 2 != 0
    }).sort((a, b) => a - b)

    newEven.forEach(item => {
        sortArray.splice(item.index, 0, item.number)

    });

    return sortArray

    // for (let i = 0; i < x.length; i++) {
    //     if (x[i] % 2 != 0) {
    //         result.push(x[i])
    //     }
    // }
    // result.sort((a, b) => a - b)

    // let k = 0
    // for (let i = 0; i < x.length; i++) {
    //     if (x[i] % 2 != 0) {
    //         resultlast.push(result[k])
    //         k = k + 1
    //     }
    //     else {
    //         resultlast.push(x[i])
    //     }

    // }

    // return resultlast
}




console.log(oddnumber([7, 1]))
console.log(oddnumber([5, 8, 6, 3, 4]))
console.log(oddnumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))