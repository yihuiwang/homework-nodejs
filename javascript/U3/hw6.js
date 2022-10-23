var str = 'abc cde adb dfb def ee abcd cc'
    tempstr = str.split(' ')
    //console.log(tempstr)
    dict = new Object()

for(let i = 0; i < tempstr.length; i++){
    dict[sumUnit(tempstr[i])] = [];
}

for(let i = 0; i < tempstr.length; i++){
    dict[sumUnit(tempstr[i])].push(tempstr[i]);
}

var str = JSON.stringify(dict)
console.log(str)


function sumUnit(x){
    arr = x.split('');
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i].charCodeAt(0)-96;
    }
    return sum.toString();
}


