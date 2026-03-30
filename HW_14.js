function login(){
    let name = prompt("enter your name")
    let password = prompt("enter your password")
    if(name === "admin" && password === "1234"){
        alert("hello admin")
    } else {
        alert("hello guest")
    }
}
login()