function convertTime(){
    let time = prompt("enter time")
    let period = prompt("enter AM or PM")
    let parts = time.split(":")
    let hour = Number(parts[0])
    let minutes = parts[1]
    if(period === "PM" && hour < 12){
        hour += 12
    }
    if(period === "AM" && hour === 12){
        hour = 0
    }
    let hourStr = hour < 10 ? "0" + hour : hour
    alert(`converted time: ${hourStr}:${minutes}`)
}
convertTime()