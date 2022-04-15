

const isTub = (number: number) => {
    let isTub = true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isTub = false
            break
        }
    }
    if (isTub) {
        console.log(`${number} is tub number`)
    } else {
        console.log(`${number} is't tub number`)
    }
}
isTub(11)
// 11 is tub number