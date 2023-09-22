function hasOddNumber(arr) {
    return arr.some(function(value){
        return value % 2 !== 0;
    })
}

function hasAZero(num) {
    numStr = num.toString().split('');
    return numStr.some(function(value){
        return value === '0';
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(value){
        return value % 2 !== 0;
    })
}

function hasNoDuplicates(arr) {
    return arr.every(function(value){
        return arr.indexOf(value) === arr.lastIndexOf(value);
    })
}

function hasCertainKey(arr, key) {
    return arr.every(function(value){
        for(keyCheck in value){
            return keyCheck === key;
        }
    })
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(value){
        return value[key] === searchValue;
    })
}
