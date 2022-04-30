

const flat = (arr: any[]) => {
    let array: any[] = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            array = [...array, ...flat(arr[i])]
        } else {
            array = [...array, arr[i]]
        }
    }
    return array
}

const reduce = (arr: any[]) => {
    const array = flat(arr)
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(reduce([[[1], [2], [3], [[4]], [9]]]))
// 19