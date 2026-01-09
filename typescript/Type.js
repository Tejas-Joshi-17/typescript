"use strict";
// ------------------------------------------------------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChaiOrder = isChaiOrder;
exports.serveOrder = serveOrder;
exports.makeChai = makeChai;
// “If this function returns true, then obj is a ChaiOrder.”
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return "Serving ".concat(item.type, " chai with ").concat(item.sugar, " sugar");
    }
    return "Serving custom chai :- ".concat(item);
}
var order = serveOrder({
    type: "Desi",
    sugar: 10
});
console.log(order); // Serving Desi chai with 10 sugar
order = serveOrder("23");
console.log(order); // Serving custom chai :- 23
function makeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala Chai...";
        case "elaichi":
            return "Elaichi Chai...";
        case "ginger":
            return "Ginger Chai...";
    }
}
console.log(makeChai({ type: "masala", spiceLevel: 10 })); // Masala Chai...
console.log(makeChai({ type: "ginger", amount: 20 })); // Ginger Chai...
console.log(makeChai({ type: "elaichi", spiceLevel: 32 })); // Elaichi Chai...
var brew = function (order) {
    if ("spiceLevel" in order) {
        return "You are Enjoying ".concat(order.type, " chai...");
    }
    return "You are Enjoying ".concat(order.type, " chai...");
};
console.log(brew({ type: "masala", spiceLevel: 10 }));
console.log(brew({ type: "ginger", amount: 20 }));
// ------------------------------------------------------------------------------------------------------------------------------------------
