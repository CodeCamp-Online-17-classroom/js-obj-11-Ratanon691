function shoppingCart() {
  let cart = {
    productName: 0,
    number: 0,
    pricePerUnit: 0,
    discountPercent: 0
  }
  for (let key in cart) {
    let value = prompt(`${key}?`)
    if (key === 'productName') {
      cart[key] = value
    } else {
      cart[key] = Number(value)
    }
  }
  if (cart.discountPercent === 0) {
    delete cart.discountPercent
  }
  console.log(cart)

function calculateDiscountedPrice(pricePerUnit, discountPercent) {
  return pricePerUnit - (pricePerUnit * (discountPercent / 100))
}
  if ('discountPercent' in cart) {
    console.log(`Discounted Price: ${calculateDiscountedPrice(cart.pricePerUnit, cart.discountPercent)}`)
  }
}

