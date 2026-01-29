// ----------------------------------------------------------------------------------------------------------------------------


let response : any = "42";      // let resposne : 42
// let numericLenght : number = response.    <--- no suggection

// start assumping resposne is string        <--- Getting suggestions for string methods
let numericLenght : number = (response as string).length    


// ----------------------------------------------------------------------------------------------------------------------------


type Book = {
    name: string
};

let bookString = `{"name" : "Who moved mycheese"}`
let bookObject = JSON.parse(bookString) as Book;        // <--- start assuming bookString is of type Book
console.log(`Favourite Book is :- ${bookObject.name}`)  // Favourite Book is :- Who moved mycheese


// ----------------------------------------------------------------------------------------------------------------------------


try {
    //
} catch(error) {
    if(error instanceof Error) {
        console.log(`Getting Error :- ${JSON.stringify(error.cause)}`)
    }
    console.log(`Getting unexcepetecd error :- `)
}


// ----------------------------------------------------------------------------------------------------------------------------


const data:unknown = `Chai aur Code`;
const strData : string = data as string;   // <--- start assuming data is of type string


// ----------------------------------------------------------------------------------------------------------------------------


type Role = `admin` | `user` | `super-admin`;

function redirectBasedOnRole(role : Role) : void {
    if(role === `admin`) {
        console.log(`Redirecting to admin dashboard`)
    } else if(role === `user`) {
        console.log(`Redirecting to user dashboard`)
    }
}


// ----------------------------------------------------------------------------------------------------------------------------