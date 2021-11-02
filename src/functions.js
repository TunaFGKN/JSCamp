function addToCart(quantity,productName="Default") {
    console.log(productName + " Sepete eklendi! (" + quantity + " adet)")
}
addToCart(10,"Bilgisayar")
addToCart(undefined,10)
addToCart(15)

let sayHello = () => { // Bu da fonksiyon yazma
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () { // Böyle de yazılabilir
    console.log("Hello World!!")
}
sayHello2()

/*function addToCart2(productName, quantity, unitPrice) {
    
}
addToCart2("Elma",5,10)
addToCart2("Armut",4,15)
addToCart2("Kiraz",6,20)*/

let product1 = {productName:"Muz", unitPrice: 10, quantity: 5}
function addToCart3(product) {
    console.log("Ürün: " + product1.productName)
    console.log("Fiyat: " + product1.unitPrice)
    console.log("Miktar: " + product1.quantity)
}
addToCart3(product1)

let product2 = {productName:"Muz", unitPrice: 10, quantity: 5}
let product3 = {productName:"Muz", unitPrice: 10, quantity: 5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName) // Referans tip - Heap

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1) // Değer tip - Stack

function addToCart4(products) {
    console.log(products)
}

products = []