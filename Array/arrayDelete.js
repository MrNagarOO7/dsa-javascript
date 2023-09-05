let arr = [10,56,78,44,89]
let pos = 2

const deleteArray= (array, position) => {
    console.log("Old array", array)
    console.log("Position", position)
    for(let i = position ; i < array.length -1; i++){
        array[i] = array[i+1]
    }
    array.length = array.length -1
    console.log("New array", array)
}

deleteArray(arr, pos)
// default array.splice(index, delete)
// arr.splice(1,1)
// [10,78,44,89]