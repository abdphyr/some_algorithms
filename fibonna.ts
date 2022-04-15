
const isFibonna = (number: number) => {
    let prev_num = 1
    let next_num = 1
    while (next_num < number) {
        let cache = next_num
        let add = prev_num + next_num
        if (add > number) {
            break
        }
        prev_num = cache
        next_num = add
    }
    if (next_num === number) {
        console.log(`${number} is fibonna number`)
        return
    } else {
        console.log(`${number} is't fibonna number`)
        return
    }
}
isFibonna(342)