// ------------------------------------------------------------------------------------------------------------------

export function getChai(kind: string | number): string {
    if (typeof kind === `string`) {
        // kind.        <--- Getting suggestions only of `string`
        return `Making ${kind} chai ...`
    }
    // kind.            <--- Getting suggestions only of `number`
    return `Chai order :- ${kind}`
}

// ------------------------------------------------------------------------------------------------------------------

export function serverChai(msg?: string): string {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai ..`
}

// ------------------------------------------------------------------------------------------------------------------

export function orderChai(size: `small` | `medium` | `large` | number): string {
    if (size === `small`) {
        return `small cutting chai ...`
    }
    if (size === `medium` || size === `large`) {
        return `make extra chai`
    }
    return `chai order #${size}`
}

// ------------------------------------------------------------------------------------------------------------------

export class KulhadChai {
    serve() : string {
        return `Serving Kulhad Chai`;
    }
}

export class CuttingChai {
    serve() : string {
        return `Serving cutting Chai`;
    }
}

export function serve(chai: KulhadChai | CuttingChai) : any {
    if(chai instanceof KulhadChai) {
        return chai.serve();
    }
}

// ------------------------------------------------------------------------------------------------------------------