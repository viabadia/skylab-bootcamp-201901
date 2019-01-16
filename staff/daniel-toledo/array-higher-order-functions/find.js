/**
 * Abstraction of find.
 *
 * This metod return the value of the first element in the array that satisfies the provided testing function.
 * The result is back in a new array
 *
 * @param {Array} arr - The array to find.
 * @param {Function} callback - testing funtion
 * 
 *@return {*} - The found value. Undefined if value is not found
 */
function find(arr, callback) {

    if(arguments.length >2) throw Error('too many arguments')

    if(!(arr instanceof Array)) throw TypeError(arr+' should be an Array')

    if (!(callback instanceof Function)) throw TypeError(func + ' should be a function')

    for (var i=0; i<arr.length; i++){
        var value = arr[i]
        if (callback(value)) return value
    }
    
}