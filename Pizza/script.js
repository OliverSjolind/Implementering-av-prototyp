let pizzaForm = document.getElementById('pizzaForm')
let pizzaSize = document.getElementsByName('pizzaSize')
let pizzaTopping1 = document.getElementById('pizzaTopping1')
let pizzaTopping2 = document.getElementById('pizzaTopping2')
let mediumPizza = document.getElementById('medium')
let largePizza = document.getElementById('large')
let priceDisplay = document.getElementById('priceDisplay')
let pepperoni = document.getElementById('pepperoni')
let ham = document.getElementById('ham')
let mozzarella = document.getElementById('mozzarella')
let mushroom = document.getElementById('mushroom')
let bacon = document.getElementById('bacon')

let toppings = document.getElementById('toppings')
let price = 0

pizzaForm.addEventListener('change', pizzaPrice)



function pizzaPrice() {
    price = 0
    if (mediumPizza.checked === true) {
        price += 7
        pepperoni.disabled = false;
    }
    if (largePizza.checked === true) {
        price += 9
    }
    if (pepperoni.checked === true) {
        price += 1.99
    }
    if (ham.checked === true) {
        price += 1.99
    }
    if (mozzarella.checked === true) {
        price += 0.99
    }
    if (mushroom.checked === true) {
        price += 1.5
    }
    if (bacon.checked === true) {
        price += 1.99
    }
    price = Math.round(price * 100) / 100
    priceDisplay.innerHTML = 'Price: ' + price;
}