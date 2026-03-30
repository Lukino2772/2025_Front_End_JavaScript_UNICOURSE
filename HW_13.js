function getFeedback(score, name){
    let barrier = 51
    if(score < barrier){
        let diff = barrier - score
        alert(`სამწუხაროდ ${name}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${diff} ქულა, უკეთესად მოემზადეთ`)
    } else if(score >= barrier && score <= 90){
        let diff = score - barrier
        alert(`გილოცავთ ${name}, თქვენ ${diff} ქულით მეტი აიღეთ ბარიერზე`)
    } else if(score > 90){
        alert(`ძალიან კარგი შედეგი ${name}!`)
    }
}

getFeedback(30, "luka")
getFeedback(70, "gio")
getFeedback(95, "nika")