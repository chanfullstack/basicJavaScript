function middle(k) {
    // let x = k.split("")
    let checklength = k.length % 2

    if (checklength != 0) {
        return k[Math.floor(k.length / 2)]
    }
    // result = k[(x.length / 2) - 1]
    // result += k[(x.length / 2)]

    return k[(k.length / 2) - 1] + k[(k.length / 2)]
}

console.log(middle("testing"))

