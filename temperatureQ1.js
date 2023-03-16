function isBoiling(temp) {
    if (temp.includes("C")) {
        let result = temp.replace("C", "")
        if (result >= 100) {
            return true
        }
        else {
            return false
        }
    }
    if (temp.includes("F")) {
        let result = temp.replace("F", "")
        if (result >= 212) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(isBoiling("212F"))
console.log(isBoiling("100C"))
console.log(isBoiling("0F"))