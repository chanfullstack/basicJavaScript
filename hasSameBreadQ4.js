function hasSameBread(breadFirst, breadSecond) {
    if (breadFirst[0] == breadSecond[0] && breadFirst[breadFirst.length - 1] == breadSecond[breadFirst.length - 1]) {
        return true
    } return false

}

console.log(hasSameBread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]))
console.log(hasSameBread(["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]))
console.log(hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]))