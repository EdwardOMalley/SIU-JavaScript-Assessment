// declare and define function here

function mostFrequentChar(str) {
    characters = []
    for (i = 0; i < str.length; i++) {
        char = str.charAt(i).toUpperCase()
        if(i == 0){
            console.log("first",char)
            characters.push({char: char, num:0})
        }
        for (j = 0; j < characters.length; j++) {
            temp = characters[j]
            if (temp.char == char) {
                characters[j].num++;
                break
            }
            else {

                if(j == characters.length-1){
                    console.log(temp.char,char)
                 characters.push({ char: char, num: 0 })
                }
            }
            
        }


    }
// test cases
// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('mississippi'); // -> 'i'. 'i' and 's' appear with same frequency in 'mississippi' but 'i' appears first!
