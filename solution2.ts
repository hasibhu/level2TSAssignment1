
type Input = string | number | boolean;

type InputReturn = string | number;

const processInput = (input : Input): InputReturn => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        if (input === true) {
            return "Active"
        } else {
            return "Inactive"
        }
    } 

}

console.log(processInput("hAsib"));
console.log(processInput("  HAsib"));
console.log(processInput(100));
console.log(processInput(true));