'use strict'
let counter = 0

const divProd1 = document.querySelector('#prod1')
const divProd2 = document.querySelector('#prod2')

const prod1_img = divProd1.querySelector('.image')
const prod1_name = divProd1.querySelector('h3')
const prod1_price = divProd1.querySelector('.price')
const prod1_order = divProd1.querySelector('.order')
const prod1_minus = divProd1.querySelector('.minus')
const prod1_plus = divProd1.querySelector('.plus')

prod1_minus.onclick = clickProd1Minus
prod1_plus.onclick = clickProd1Plus

const prod2_img = divProd2.querySelector('.image')
const prod2_name = divProd2.querySelector('h3')
const prod2_price = divProd2.querySelector('.price')
const prod2_order = divProd2.querySelector('.order')
const prod2_minus = divProd2.querySelector('.minus')
const prod2_plus = divProd2.querySelector('.plus')

prod2_minus.onclick = clickProd2Minus
prod2_plus.onclick = clickProd2Plus


let prod1 = {
    name:'Iphone 15 pro max',
    price: 1000,
    image:'src/images/15прмкс.jpeg',
    count: 0,
}

let prod2 = {
    name:'Poco X 6',
    price:10000,
    image:'src/images/gjrjm.jpg',
    count: 0,
}
function calcTotalPrice() {
    return prod1.count * prod1.price + prod2.count * prod2.price
}

let totalPrice = calcTotalPrice()

prod1_img.style.backgroundImage = `url(${prod1.image})`
prod1_name.innerText = prod1.name
prod1_price.innerText = prod1.price
prod1_order.innerText = prod1.count

prod2_img.style.backgroundImage = `url(${prod2.image})`
prod2_name.innerText = prod2.name 
prod2_price.innerText = prod2.price
prod2_order.innerText = prod2.count 

function clickProd1Minus(){
    console.log(1)
}

function clickProd1Plus(){
    console.log(1)
}

function clickProd2Minus(){
    console.log(1)
}

function clickProd2Plus(){
    console.log(1)
}