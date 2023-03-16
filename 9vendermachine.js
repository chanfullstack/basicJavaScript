// function vender(x, y) {
//     let result = ''
//     let lastmoney = y - x
//     let exchange = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
//     let bank1000 = 0
//     let bank500 = 0
//     let bank100 = 0
//     let bank50 = 0
//     let bank20 = 0
//     let bank10 = 0
//     let bank5 = 0
//     let bank2 = 0
//     let bank1 = 0

//     while (lastmoney > 0) {
//         if (lastmoney >= exchange[8]) {
//             lastmoney = lastmoney - exchange[8]
//             bank1000 += 1
//         }
//         else if (lastmoney >= exchange[7]) {
//             lastmoney = lastmoney - exchange[7]
//             bank500 += 1
//         }
//         else if (lastmoney >= exchange[6]) {
//             lastmoney = lastmoney - exchange[6]
//             bank100 += 1
//         }
//         else if (lastmoney >= exchange[5]) {
//             lastmoney = lastmoney - exchange[5]
//             bank50 += 1
//         }
//         else if (lastmoney >= exchange[4]) {
//             lastmoney = lastmoney - exchange[4]
//             bank20 += 1
//         }
//         else if (lastmoney >= exchange[3]) {
//             lastmoney = lastmoney - exchange[3]
//             bank10 += 1
//         }
//         else if (lastmoney >= exchange[2]) {
//             lastmoney = lastmoney - exchange[2]
//             bank5 += 1
//         }
//         else if (lastmoney >= exchange[1]) {
//             lastmoney = lastmoney - exchange[1]
//             bank2 += 1
//         }
//         else if (lastmoney >= exchange[0]) {
//             lastmoney = lastmoney - exchange[0]
//             bank1 += 1
//         }
//     }
//     result = "bank1000 = " + bank1000 + "," + "bank500 = " + bank500 + "," + "bank100 = " + bank100 + "," + "bank50 = " + bank50 + "," + "bank20 = " + bank20 + "," + "bank10 = " + bank10 + "," + "bank5 = " + bank5 + "," + "bank2 = " + bank2 + "," + "bank1 = " + bank1
//     return result
// }


// console.log(vender(1535, 2000))



function exchange(x, y) {
    let bank = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let exchangeMoney = y - x

    const result = bank.reduce((acc, item, i) => {
        let amount = Math.floor(exchangeMoney / item)
        if (amount > 0) {
            exchangeMoney = exchangeMoney - (amount * item)
            return [...acc, { type: item, qty: amount }]
        }
        return acc
    }, [])
    console.log(result)
}

exchange(35, 100)