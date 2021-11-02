class Customer{
    constructor(id,customerNumber){
        this.id = id // this demek instance'a karşılık gelir (7.satır)
        this.customerNumber = customerNumber
    }
}
let customer = new Customer(1,"12345")
//prototyping
customer.name = "Murat"
console.log(customer.name)

Customer.bisey = "Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndiCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber) //verileri base classa gönderir
        this.firstName = firstName
    }
}

class CoopCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber) //verileri base classa gönderir
        this.companyName = companyName
    }
}

//şimdi benim bir tane arrayim var arrayin içinde de objeler var 
//arrayismi.map(takmaisim => {takmaisim.objeninpropu} )

//filter yepyeni bir array çıkarır bizim için

//let toplam = products.reduce((acc,product)=>acc+product.unitPrice,0)