function checkVowel(word){
    const vowels = ['A','E','I', 'O', 'U']
    const firstLetter =word[0].toUpperCase()
    if (vowels.includes(firstLetter)) {
        return `სიტყვა იწყება ხმოვანით, რომელიც არის ${firstLetter}`
    }else{
        return `სიტყვა არ იწყება ხმოვანით, რადგან ის არის ${firstLetter}`
    }
}
let word= prompt("enter word")
alert(checkVowel(word))