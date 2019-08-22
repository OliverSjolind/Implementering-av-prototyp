let pizzaForm = document.getElementById('pizzaForm')
let pizzaSize = document.getElementsByName('pizzaSize')
let pizzaTopping1 = document.getElementById('pizzaTopping1')
let pizzaTopping2 = document.getElementById('pizzaTopping2')
let mediumPizza = document.getElementById('medium')
let priceDisplay = document.getElementById('priceDisplay'),
    price = 0;


pizzaForm.addEventListener('change', pizzaPrice)

function pizzaPrice() {
    if (mediumPizza.checked == true) {
        price += 7
    }
    priceDisplay.innerHTML = 'Price: ' + price
}