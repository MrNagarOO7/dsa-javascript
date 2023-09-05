let arr1 = [4,8,90,45,80]
let arr2 = [67,89,4,56,22]

const arrayMerge = (array1, array2) => {
    const arr3 = []
    for(let i = 0; i < array1.length + array2.length; i++){
        if(i < array1.length ){
            arr3[i] = array1[i]
        } else {
            arr3[i] = array2[i - array1.length]
        }
    }
    return arr3
}

// shortcut arr3 = [...arr1, ...arr2] using spread operator

console.log(arrayMerge(arr1, arr2))