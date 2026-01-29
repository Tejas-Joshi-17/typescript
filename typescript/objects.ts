// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


type Tea = {
    name : string;
    price : number;
    ingredients : string[]
}

const adrakChai : Tea = {
    name : `Adrak Chai`,
    price : 25,
    ingredients : ["ginger", "tea leaves"]
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


type Item = {
    name : string,
    quantity : number
}

type Address = {
    street : string,
    pin : number
}

type Order = {
    id : string,
    items : Item[],
    address : Address
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


type Chai = {
    name : string,
    price : number,
    isHot : boolean
}

const updateChai = (updates: Partial<Chai>) : void => {
    console.log(`updating chai with ${JSON.stringify(updates)}`)
}

updateChai({price: 25});                            // updating chai with {"price":25}
updateChai({name: `masala chai`});                  // updating chai with {"name":"masala chai"}
updateChai({price: 25, name: `ginger chai`});       // updating chai with {"price":25,"name":"ginger chai"}
updateChai({});                                     // updating chai with {}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


type ChaiOrder = {
    name? : string,
    quantity? : number
}

const placeOrder = (order : Required<ChaiOrder>) : void => {   // Make all properties in T required
    console.log(JSON.stringify(order));
}

// placeOrder({})                                   <---- Make all properties in T required
// placeOrder({name : `Masala Chai`})               <---- Make all properties in T required
placeOrder({name : `Masala Chai`, quantity : 2});   // {"name":"Masala Chai","quantity":2}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------