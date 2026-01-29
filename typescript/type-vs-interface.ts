// ---------------------------------------------------------------------------------------------------------------------------------------------

// Note :- Prefer interface over type

// ---------------------------------------------------------------------------------------------------------------------------------------------

type TeaRecipe = {
    water : number;
    milk : number
}

class MasalaChia implements TeaRecipe {
    water: number = 100;
    milk: number = 50;

}


// ---------------------------------------------------------------------------------------------------------------------------------------------


type CupSize =`small` | `large`;
    

// class Chai implements CupSize { }
// A class can only implement an object type or intersection of object types with statically known members

type ChaiCupSizeType = {
    size : `small` | `large`;
}

class Chai1 implements ChaiCupSizeType { 
    size: "small" | "large" = `large`;
}

interface CupSizeInterface {
    size : `small` | `large`;
}

class Chai2 implements CupSizeInterface { 
    size: "small" | "large" = `large`;
};


// ---------------------------------------------------------------------------------------------------------------------------------------------


// type Responses = {ok :true | ok: false};
interface Responses {
    ok : boolean;
}

class MyCustomResponse implements Responses {
    ok: boolean = true;
}


// ---------------------------------------------------------------------------------------------------------------------------------------------

