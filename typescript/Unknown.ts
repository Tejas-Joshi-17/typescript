// -------------------------------------------------------------------------------------------------------------------------------

let value : any = "Hi, Tejas Joshi Here";
value = 23;
value = true;
value = null;
value = [1, `Tejas`, 22.32, true, undefined];
value.toUpperCase();      // <---- No Warning & Suggestions


// -------------------------------------------------------------------------------------------------------------------------------


let newValue : unknown = "Hi, Tejas Joshi Here"
newValue = 23;
newValue = true;
newValue = null;
newValue = [1, `Tejas`, 22.32, true, undefined];
newValue = `Tejas Joshi`
// newValue.toUpperCase()  <-- Expected an assignment or function call and instead saw an expression.
if(typeof newValue === `string`) {
    newValue = newValue.toUpperCase();  // <--- Getting Suggestions now
}


// -------------------------------------------------------------------------------------------------------------------------------