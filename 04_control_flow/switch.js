//Switch-case-statement basic syntax:

// switch (key) {
//     case value:
//         break;
    
//     default:
//         break;
// }

const month = "march";
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Default case match");
        break;
}