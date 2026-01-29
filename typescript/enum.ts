// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


enum CupSize {
    SMALL,     // 0
    MEDIUM,    // 1
    LARGE      // 2
}

console.log(`Cupsize is :- ${CupSize.SMALL}`);       // Cupsize is :- 0
console.log(`Cupsize is :- ${CupSize.MEDIUM}`);      // Cupsize is :- 1
console.log(`Cupsize is :- ${CupSize.LARGE}`);       // Cupsize is :- 2


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


enum Status {
    PENDING = 100,
    SERVED,     // 101
    CANCELLED   // 102
}

console.log(`Response code of Pending is :- ${Status.PENDING}`);       // Response code of Pending is :- 100
console.log(`Response code of Served is :- ${Status.SERVED}`);         // Response code of Served is :- 101
console.log(`Response code of Canclled is :- ${Status.CANCELLED}`);    // Response code of Canclled is :- 102


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


enum ChaiType {
    MASALA = 'Masala',
    GINGER = `Ginger`
}

export function makeChai(chaiType : ChaiType) : void {
    console.log(`Making ${chaiType} chai`)
}

makeChai(ChaiType.MASALA);          // Making Masala chai
// makeChai(`Masala`);              <--- Argument of type '"Masala"' is not assignable to parameter of type 'ChaiType'
makeChai(ChaiType.GINGER);          // Making Ginger chai


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// Sugars.HIGH = 10;        <---- Cannot assign to 'HIGH' because it is a read-only property.


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------