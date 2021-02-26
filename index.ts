var title = document.createElement('div')
title.innerHTML = 'Make Invoice'
title.setAttribute('style','text-align:center; font-size:20;')
document.body.append(title)

var idd = document.createElement('div')
idd.innerHTML = 'Enter customer id:&nbsp'
idd.setAttribute('style','text-align:center;position:relative;top:50px;')
document.body.append(idd)
var custId = document.createElement('input')
custId.type = 'text'
custId.id = 'ID'
idd.append(custId)

var names = document.createElement('div')
names.innerHTML = 'Enter customer name:&nbsp'
names.setAttribute('style','text-align:center;position:relative;top:100px;')
document.body.append(names)
var custName = document.createElement('input')
custName.type = 'text'
custName.id= 'NAME'
names.append(custName)

var prod = document.createElement('div')
prod.innerHTML = 'Enter product name:&nbsp'
prod.setAttribute('style','text-align:center;position:relative;top:150px;')
document.body.append(prod)
var prodName = document.createElement('input')
prodName.type = 'text'
prodName.id= 'PROD'
prod.append(prodName)


var price = document.createElement('div')
price.innerHTML = 'Enter price:&nbsp'
price.setAttribute('style','text-align:center;position:relative;top:200px;')
document.body.append(price)
var prodPrice = document.createElement('input')
prodPrice.type = 'text'
prodPrice.id= 'PRICE'
price.append(prodPrice)


var datee = document.createElement('div')
datee.innerHTML = 'Enter date:&nbsp'
datee.setAttribute('style','text-align:center;position:relative;top:250px;')
document.body.append(datee)
var shopDate = document.createElement('input')
shopDate.type = 'date'
shopDate.id= 'DATE'
datee.append(shopDate)



function defaultDate() {
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth()+1
    var yyyy = today.getFullYear()
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    today =  `${yyyy}-${mm}-${dd}`
    document.getElementById("DATE").value = today
  }
  
  
  window.onload = ()=>{
    defaultDate()
  }

  var btnBlock = document.createElement('div')
  btnBlock.setAttribute('style','position:relative; top: 300px; text-align:center;')
  document.body.append(btnBlock)
  var btn = document.createElement('button')
  btn.innerHTML = 'Generate Invoice'
  btn.setAttribute('onclick','showInvoice.generateInvoice()')
  btnBlock.append(btn)

 
var containe = document.createElement('div')
containe.setAttribute('style','position:relative;top:350px;')
document.body.append(containe)


var dummy = document.createElement('div')
containe.append(dummy)

  interface invoice{
      customerId: string
      custName: string
      amount: number
      discount: number
      payableAmount : number
      
  }

class invoice{

    customerId : string
    custName: string
    amount: number
    prodName: string
    discount: number
    payableAmount : number

 generateInvoice(){

     if(containe.firstChild)
     containe.removeChild(containe.firstChild)

     var mainBox = document.createElement('div')
    containe.append(mainBox)

     this.customerId = document.getElementById('ID').value
     this.custName = document.getElementById('NAME').value
     this.amount = document.getElementById('PRICE').value 
     this.prodName = document.getElementById('PROD').value 
     this.discount = 10
     
     this.payableAmount = this.amount - (this.amount * 0.10)

     var line1 = document.createElement('hr')
     mainBox.append(line1)

     var header = document.createElement('div')
     header.innerHTML = 'INVOICE'
     header.setAttribute('style','text-align:center;font-size:30;')
     mainBox.append(header)

     var line2 = document.createElement('hr')
     mainBox.append(line2)

     var dateLine = document.createElement('div')
     dateLine.setAttribute('style','text-align:center')
     dateLine.innerHTML = `Date:&nbsp ${document.getElementById("DATE").value}`
     mainBox.append(dateLine)

     var line3 = document.createElement('hr')
     mainBox.append(line3)

     var custLine = document.createElement('div')
     mainBox.append(custLine)

     var custNames = document.createElement('div')
     custNames.innerHTML = `Customer Name:&nbsp&nbsp: ${this.custName}`
     custNames.setAttribute('style','float:left')
     custLine.append(custNames)

     var custIdz = document.createElement('div')
     custIdz.innerHTML = `Customer ID:&nbsp&nbsp: ${this.customerId}`
     custIdz.setAttribute('style','float:right')
     custLine.append(custIdz)

     var breaks = document.createElement('div')
     mainBox.append(breaks)

     var line4 = document.createElement('br')
     breaks.append(line4)

     var line5 = document.createElement('hr')
     breaks.append(line5)

     var details = document.createElement('div')
     details.setAttribute('style','text-align:center;font-size:20;')
     details.innerHTML = `Product: &nbsp&nbsp ${this.prodName} <br> Price: &nbsp&nbsp ₹${this.amount} <br> Discount:&nbsp&nbsp ${this.discount}% <br> Amount Payable:&nbsp&nbsp ₹${this.payableAmount}`
     mainBox.append(details)

     var line6 = document.createElement('hr')
     mainBox.append(line6)

     var thanks = document.createElement('div')
     thanks.innerHTML = 'Thanks for shopping.<br> XYZ SHOP <br> No. 555, abcd street, USA <br> Contact: +14563287900458'
     thanks.setAttribute('style','text-align:center;font-size:12;')
     mainBox.append(thanks)

     console.log(this.customerId,this.custName,this.amount,this.discount,this.payableAmount)
    }


}

var showInvoice = new invoice() 

