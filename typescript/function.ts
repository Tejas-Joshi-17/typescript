// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function makeChai(type: string, cusp: number): void {
    console.log(`Making ${cusp} cups of ${type}`)
}

// makeChai()               <--- Expected 2 arguments, but got 0
// makeChai(`Masala`);      <---- Expected 2 arguments, but got 1.
makeChai(`Masala`, 3)       // Making 3 cups of Masala


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function serveChai(name : string, quantity? : number) : void {
    console.log(`Serving ${name} chai with ${quantity} cups`)
}

serveChai(`Masala`);            // Serving Masala chai with undefined cups
serveChai(`Masala`, 2)          // Serving Masala chai with 2 cups


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function servingChai(name : string, quantity : number = 2) {
    console.log(`Serving ${name} chai with ${quantity} cups`)
}

servingChai(`Masala`);          // Serving Masala chai with 2 cups
servingChai(`Masala`, 10);      // Serving Masala chai with 10 cups


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function createChai(order : {
    type : string,
    sugar : number,
    size : `small`  | `large`
}) : number {
    return 4;
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------