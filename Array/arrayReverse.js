let arr = [4,8,90,45,80, 56, 78, 44]

const arrayReverse = (array) => {
    for(let i = 0; i < array.length/2; i++){
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
    return array
}


console.log(arrayReverse(arr))
// arr.reverse()