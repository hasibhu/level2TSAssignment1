
type Input = string | number | boolean;


const processInput = (input : Input): Input => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        if (input === true) {
            
        }
    } 


}