// --------------------------------------------------------------------------------------------------------------------------


export function serveChai(firstName:string, lastName?: string) : void {
    console.log(`Hi My Name is :- ${firstName} ${lastName}`)
}

serveChai(`Tejas`);             // Hi My Name is :- Tejas undefined
serveChai(`Tejas`, `Joshi`);    // Hi My Name is :- Tejas Joshi


// --------------------------------------------------------------------------------------------------------------------------