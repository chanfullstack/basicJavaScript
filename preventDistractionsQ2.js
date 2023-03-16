function preventDistractions(x) {
    if (x.includes("meme") || x.includes("tiktok") || x.includes("anime") || x.includes("football")) {
        return "NO!"
    }
    return "Safe watching!"

}

console.log(preventDistractions("The most popular viral tiktok videos"))
console.log(preventDistractions("Top 10 football players of all time"))
console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps"))