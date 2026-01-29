// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function warpInArray<T>(item : T) : T[] {
    return [item];
}

console.log(warpInArray(`Tejas Joshi`));                 // [ 'Tejas Joshi' ]
console.log(warpInArray({name : `Tejas`, age : 23}));    // [ { name: 'Tejas', age: 23 } ]
console.log(warpInArray(true));                          // [ true ]
console.log(warpInArray(34.13));                         // [ 34.13 ]


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export function pair<A, B>(a: A, b: B) : [A,B] {
    return [a, b]
}

console.log(pair(`Tejas Joshi`, `Sarvatra Tech`));            // [ 'Tejas Joshi', 'Sarvatra Tech' ]
console.log(pair(`Tejas Joshi`, {name : `Sarvatra Tech`}));   // [ 'Tejas Joshi', { name: 'Sarvatra Tech' } ]
console.log(pair(`Tejas Joshi`, 23));                         // [ 'Tejas Joshi', 23 ]


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


interface Box<T> {
    content : T
}

const numberBox : Box<number> = {  content : 10    }
const stringBox : Box<string> = {  content : `10`  }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


interface ApiResponse<T> {
    status : number,
    data : T
}

const res : ApiResponse<{flavor : string}> = {
    status : 200,
    data : {flavor : `masala`}
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------