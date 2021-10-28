console.log("Hello World!")
// + var global değişken gibi let özel değişken gibidir.
// var'ı dışarda tanımlayıp aynı isimle başka bir blokta başka bir şey tanımlarsan önceki tanımlanan da değişir
// - let'i aynı isimle başka bir blokta kullanırsan dışarıda ayrı blokta ayrı değer alır
// JS type safe değildir
// const read onlydir bir kere tanımladıktan sonra onu başka bir yerden değiştiremezsin
// array ["kredi 1","kredi 2","kredi 3"] --- for

//let student = {id:1, name="Tuna"}

//function save(stundent) {
//    console.log("student")
//}

//save() parametre gönderilme ama hata vermez "undefined"

// 9-1 -> bu iki studentin birbiriyle alakası yok

//rest
let showProducts = function (id,...products) { //array
    console.log(id)
    console.log(products)
}

console.log(typeof showProducts)
showProducts(10,"Elma","Armut","Karpuz")


//spread
let points = [1,2,3,4,50,5,60,14]
console.log(points)
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H","XYZ")

//Destructuring - önemli - elinizdeki bir arrayi ayrı ayrı değişkenlere atamak
let populations = [10000,20000,30000,[40000,50000]] //normal array
let [small,medium,high,[veryHigh,max]] = populations // small high mediuma populationsu aktar
console.log(small)
console.log(high)
console.log(medium)
console.log(veryHigh)
console.log(max)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1,name:"Beverages"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category //object destruct
console.log(id)
console.log(name)

