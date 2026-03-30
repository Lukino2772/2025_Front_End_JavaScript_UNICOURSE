function compareLength(word1, word2){
    if(word1.length === word2.length){
        return true
    } else {
        return false
    }
}
console.log(compareLength("hello", "world"))
console.log(compareLength("hi", "there"))