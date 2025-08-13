let arr=['S',"hello","learning","javascript"]

// Methods

// // push() add one or more element in arr
arr.push("HI","p")
console.log(arr)

// // pop() removes the last element
arr.pop()
console.log(arr)

// // shift() remove first element
arr.shift()
console.log(arr)

// // unshift() adds element to the beginning
arr.unshift('s')
console.log(arr)

// length
console.log(arr.length)

// // slice(start,end) returns a shallow copy of a portion of the array.So unless you assign the result of slice() to a variable, it has no effect on arr.
let slice= arr.slice(1,3)
console.log(arr)

// splice (start, deleteCount, item1, item2, ...)
// start: The index at which to start changing the array.
// deleteCount: Number of elements to remove.
// item1, item2, ...: Elements to add starting at start index (optional).
arr.splice(2,2)
console.log(arr)

// concat() merge array and returns a shallow copy of a portion of the array
let arr1=["lucky","yes"]
let arr3=arr.concat(arr1)
console.log(arr3)

// at(index) return the element at a given index
let arra=arr.at(1)
console.log(arra)

// includes
console.log(arr.includes("hello"))