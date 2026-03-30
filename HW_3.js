let age = 20;

if (typeof age !== "number" || isNaN(age)){
    console.log("not correct age");
} else if (age < 18) {
    console.log("you can't get license");
} else {
    console.log("you can get license");
}