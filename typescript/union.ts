// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


let subscribersCount : number | string = 10021;
subscribersCount = "1M";
// subscribersCount = true;           <---- Type 'boolean' is not assignable to type 'string | number'.

let apiRequestStatus : `pending` | `success` | `error` = `pending`;
apiRequestStatus = `success`;
// apiRequestStatus = `done`          <---- Type '"done"' is not assignable to type '"pending" | "success" | "error"'.

let airlineSeat : `aisle` | `window` | `middle` = `middle`;
airlineSeat = `window`;
// airlineSeat = 'sleeper'            <---- Type '"sleeper"' is not assignable to type '"aisle" | "window" | "middle"'.


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


const orders1 = [ `12`, `20`, `28`, `42`]

let currentOrder1;           // Variable 'currentOrder' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7043)
                             // let currentOrder: any

for(let order of orders1) {
    if(order === `28`) {
        currentOrder1 = order;
        break;
    }
}

console.log(currentOrder1);

currentOrder1 = 12;

console.log(currentOrder1);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


const orders2 = [ `12`, `20`, `28`, `42`]

let currentOrder2 : string | undefined;     

for(let order of orders2) {
    if(order === `28`) {
        currentOrder2 = order;
        break;
    }
    currentOrder2 = `40`
}

// currentOrder2 = 12;        <---- Type 'number' is not assignable to type 'string'.ts(2322)
                              // let currentOrder2: string | undefined

console.log(currentOrder2);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------