function doubleValues(arr){
    const newArr = [];
    arr.forEach(function(value){
        newArr.push(value * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(value){
        if(value % 2 === 0)
            newArr.push(value);
    })
    return newArr;
}

function showFirstAndLast(arr){
    const newArr = [];
    arr.forEach(function(value){
        newArr.push(value[0] + value[value.length-1]);
    })
    return newArr;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    })
    return arr;
}

function vowelCount(str){
   const vowels = 'aeiou';
   let obj = {};
   let newArr = str.split("");
   newArr.forEach(function(char){
        let lowerCase = char.toLowerCase();
        if(vowels.indexOf(lowerCase) != -1){
            if(obj[lowerCase]){
                obj[lowerCase]++;
            }
            else
                obj[lowerCase] = 1;
        }
   })
    return obj;
   }


function doubleValuesWithMap(arr) {
    return arr.map(function(value){
        return value * 2;
    })
}


function valTimesIndex(arr){
    return arr.map(function(value, i){
        return value * i;
    })
}


function extractKey(arr, key){
    return arr.map(function(value){
        return value[key];
    })
}


function extractFullName(arr){
    return arr.map(function(value){
        return (value.first + " " + value.last);
    })
}


function filterByValue(arr, key) {
    return arr.filter(function(value){
        return value[key] !== undefined;
    })
}


function find(arr, searchValue) {
    return arr.filter(function(value){
        return value === searchValue;
    })[0];
}


function findInObj(arr, key, searchValue) {
    return arr.filter(function(value){
        return value[key] === searchValue;
    })[0];
}


function removeVowels(str) {
    const vowels = 'aeiou';
    let newArr = [], newStr = "";
    newArr = str.toLowerCase().split("");
    newArr.filter(function(value){
        if(vowels.indexOf(value) === -1)
            newStr += value;
    })
    return newStr;
    
}


function doubleOddNumbers(arr) {
    const newArr = [];
    arr.filter(function(value){
        if(value % 2 !== 0)
            return newArr.push(value * 2);

    })
    return newArr;
}
