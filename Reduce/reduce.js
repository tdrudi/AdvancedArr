function extractValue(arr, key) {
    return arr.reduce(function(accumulator, name){
        accumulator.push(name[key]);
        return accumulator;
    }, []);
}

function vowelCount(str) {
    const vowels = 'aeiou';
    return str.split('').reduce(function(accumulator, char){
        let checkLetter = char.toLowerCase();
        if(vowels.indexOf(checkLetter) !== -1){
            if(!accumulator[checkLetter])
                accumulator[checkLetter] = 1;
            else
                accumulator[checkLetter]++;
        }
        return accumulator;
    }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accumulator, val, index){
        accumulator[index][key] = value;
        return accumulator;
    }, arr);
}

function partition(arr, callback) {
    return arr.reduce(function(accumulator, value){
        if(callback(value) === true)
            accumulator[0].push(value);
        else
            accumulator[1].push(value);
        return accumulator;
    }, [[],[]]);

}
