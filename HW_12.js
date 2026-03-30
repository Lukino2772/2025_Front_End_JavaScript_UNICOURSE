let question = ""
let answer = ""

let topic = Number(prompt('welcome to fmae choose a topic:\n1. strings\n2. variable\n3. math'))

switch(topic){
    case 1:
        question = "რა არის typeof(5)?"
        answer = "number"
        break
    case 2:
        question = "შეიძლება თუ არა let-ის რედეკლარირება"
        answer = "yes"
        break
    case 3:
        question = "რას აბრუნებს console.log(Math.floor(2.1))"
        answer = "ori"
        break
    default:
        alert("wrong")
}

if(topic === 1 || topic === 2 || topic === 3){
    let userAnswer = prompt(question).toLowerCase()
    if(userAnswer === answer){
        alert("correct")
    } else {
        alert("wrong answer")
    }
}