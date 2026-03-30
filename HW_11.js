let age = Number(prompt("enter your age"))
let movie = prompt("enter movie type (regular or 3d)")
let time = prompt("enter time of day")
let discount = prompt("do you have discount ticket?")
let price = 0

switch(true){
    case age< 10:
        price=5
        break
    case age>=10 && age <= 65:
        price = 15
        break
    case age >65:
        price= 10
        break
    default:
        alert("invalid age")
}
switch(movie){
    case "3d":
        price += 5
        break
    case "regular":
        break
    default:
        alert("invalid movie type")
}
switch(time){
    case "evening":
        price += 5
        break
    case "matinee":
        break
    default:
        alert("invalid time")
}
if(discount === "yes"){
    let type = prompt("discount type?")
    if(type === "percent"){
        price *= 0.75
    }else if(type === "fixed"){
        price -= 5
    }
}
alert(`ticket price: ${price}`)