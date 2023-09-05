let arr = [10,56,78,56,89]
let newElement = 46
let pos = 3

const insertArray= (array, element, position) => {
    console.log("Old array", array)
    for(let i = array.length-1; i >= position; i--){
        array[i+1] = array[i]
    }
    array[position] = element
    console.log("New array", array)
}

insertArray(arr, newElement, pos)
// default array.splice(index, delete, value)
// arr.splice(2,0,13)
// [ 10, 56, 13, 78,46, 56, 89]