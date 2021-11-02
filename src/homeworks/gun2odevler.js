// Sayılar asal mı değil mi?
function findPrime(...numbers) {
    let messages = []
    numbers.forEach(number=>{
        if(isItPrime(number))
            messages.push(number + " asal sayıdır");
        else
            messages.push(number + " asal sayı değildir");
    })
    return messages;
}
function isItPrime(number){
    for(var i =2; i<number; i++){
        if(number %i ==0 ){
            return false;
        }
    }
    return true;
}
console.log(findPrime(2,5,8,21,13));

// Sayılar arkadaş mı değil mi?
function findFrienNumbers(number1, number2) {
    let number1Divisors = findTotalDivisors(number1)
    let number2Divisors = findTotalDivisors(number2)
    if (number1Divisors == number2 && number2Divisors == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    }
    else{
        console.log(number1 + " ve " + number2 + " arkadaş sayılar değildir.")
    }
}

function findTotalDivisors(number) {
    let totalDivisors = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            totalDivisors += i
        }
    }
    return totalDivisors
}

findFrienNumbers(220,284)
findFrienNumbers(10,15)

// Bine kadar olan tüm mükemmel sayılar
function perfectNumbers() {
    for (let i = 1; i < 1000; i++) {
        if (findTotalDivisors(i) == i) {
            console.log(i + " Mükemmel sayı")
        }
    }
}

perfectNumbers()

// Bine kadar olan tüm asal sayılar
function primeNumbers() {
    for (let i = 2; i < 1000; i++) {
        if (isItPrime(i) == true) {
            console.log(i + " asal sayıdır")
        }
    }
}

primeNumbers()