var elements = ['Spades','Hearts','Diamonds','Clubs']
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13]

console.log('The format of the 1st print out (13 cards per line):')
var spades = createCards(elements.slice(0,1),num)
var hearts = createCards(elements.slice(1,2),num)
var diamonds = createCards(elements.slice(2,3),num)
var clubs = createCards(elements.slice(3,4),num)
printCards(spades)
printCards(hearts)
printCards(diamonds)
printCards(clubs)


console.log('The format of the 2nd print out (13 cards per line):')
shuffle(spades)
shuffle(hearts)
shuffle(diamonds)
shuffle(clubs)
printCards(spades)
printCards(hearts)
printCards(diamonds)
printCards(clubs)

console.log('The format of the 3rd print out (13 cards per line):')
var allcards = createCards(elements,num)
shuffle(allcards)
printCards(allcards.slice(0,13))
printCards(allcards.slice(13,26))
printCards(allcards.slice(26,39))
printCards(allcards.slice(39,52))


function createCards(elements, num){
    var cards =[]
    for(let j = 0; j < elements.length; j++){
        for(let i = 0; i < num.length; i++){
            cards.push((num[i] +' of '+ elements[j]).toString()) 
        }
    }
    return cards;
}

function printCards(cards){
    var str = cards.join(',')+'.';
    console.log(str)
}

function shuffle(arr){
    let currentIndex = arr.length, randomIndex;
    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--;
        [arr[currentIndex],arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]] 
    }
    return arr;
}

