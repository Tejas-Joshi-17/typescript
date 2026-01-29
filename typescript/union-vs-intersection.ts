// ---------------------------------------------------------------------------------------------------------------------------------------------


type TeaType = `masala` | `ginger` | `lemon`;

function orderChai(tea : TeaType) {
    console.log(tea);
}


// ---------------------------------------------------------------------------------------------------------------------------------------------


type BaseChai = { teaLeaves : number; }
type Extra = { masala : number; }

type MasalChai = BaseChai & Extra;
const cup : MasalChai = {
    teaLeaves : 10,  // No value exists in scope for the shorthand property 'tesLeaves'. Either declare one or provide an initializer.
    masala : 2
}


// ---------------------------------------------------------------------------------------------------------------------------------------------