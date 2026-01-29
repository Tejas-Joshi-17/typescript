// ------------------------------------------------------------------------------------------------------------------------------------------

export type ChaiOrder = {
    type: string,
    sugar: number
}

// “If this function returns true, then obj is a ChaiOrder.”
export function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === `object` &&
        obj !== null &&
        typeof obj.type === `string` &&
        typeof obj.sugar === `number`
    )
}

export function serveOrder(item: ChaiOrder | string): string {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai :- ${item}`
}

let order = serveOrder({
    type: "Desi",
    sugar: 10
});
console.log(order);             // Serving Desi chai with 10 sugar

order = serveOrder(`23`);
console.log(order);             // Serving custom chai :- 23


// ------------------------------------------------------------------------------------------------------------------------------------------


export type MasalaChai = { type: "masala", spiceLevel: number };
export type GingerChai = { type: "ginger", amount: number };
export type ElaichiChai = { type: "elaichi", spiceLevel: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

export function makeChai(order: Chai): string {
    switch (order.type) {
        case `masala`:
            return `Masala Chai...`;
        case `elaichi`:
            return `Elaichi Chai...`
        case `ginger`:
            return `Ginger Chai...`
    }
}

console.log(makeChai({ type: `masala`, spiceLevel: 10 }));        // Masala Chai...
console.log(makeChai({ type: `ginger`, amount: 20 }));            // Ginger Chai...
console.log(makeChai({ type: `elaichi`, spiceLevel: 32 }));       // Elaichi Chai...

let brew = (order: MasalaChai | GingerChai): string => {
    if (`spiceLevel` in order) {
        return `You are Enjoying ${order.type} chai...`
    }
    return `You are Enjoying ${order.type} chai...`
}

console.log(brew({ type: `masala`, spiceLevel: 10 }));        // You are Enjoying masala chai...
console.log(brew({ type: `ginger`, amount: 20 }));            // You are Enjoying ginger chai...


// ------------------------------------------------------------------------------------------------------------------------------------------

// function makeCHai(order : {type : string, sugar : number, strong : boolean}) {
//     // code
// }

    
// function serveChai(order : {type : string, sugar : number, strong : boolean}) {
//     // code
// }

type chaiOrder = {
    type : string,
    sugar : number,
    strong : boolean
};

function makeChaii(order : chaiOrder) {
    // code
}

function serveChai(order : chaiOrder) {
    // code
}


// --------------------------------------------------------------------------------------------------------------------------