function getFilename(x) {
    let result = x.split("/")
    return result[result.length - 1]

}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"))