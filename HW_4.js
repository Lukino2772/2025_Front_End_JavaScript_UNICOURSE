let temperature = 15;

if (typeof temperature !== "number" || isNaN(temperature)) {
    console.log("not correct info");
} else if (temperature < 0) {
    console.log("very very cold");
} else if (temperature <= 10) {
    console.log("very cold");
} else if (temperature <= 20) {
    console.log("cold");
} else if (temperature <= 30) {
    console.log("warm");
} else {
    console.log("hot");
}