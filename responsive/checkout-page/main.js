const form = document.querySelector('.checkout-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  if (formData.get('saveInfo')) {
    saveFormDataToLocalStorage(formData)
  }

  console.log('submitting form with:')
  for (let entry of formData.entries()) {
    console.log(entry)
  }
})

// Cart logic
const cartItems = form.querySelectorAll('.cart-item')

// Return total price of all items in cart in cents
const calcTotalCentsInCart = (cartItems) => {
  let total = 0
  for (let item of cartItems) {
    let price = item
      .querySelector('.cart-item__price')
      .textContent.replace(/\$|\./g, '')
    const qty = +item.querySelector('input').value
    total += price * qty
  }
  return total
}

const changeDisplayedTotal = () => {
  const totalPriceHTML = document.querySelector('#total-price')
  const newTotal = calcTotalCentsInCart(cartItems)
  // No items in the cart
  if (!newTotal) totalPriceHTML.textContent = '$0'
  else {
    const shippingPrice =
      document.querySelector('#shipping-price').textContent.substring(1) * 100
    totalPriceHTML.textContent = `$${(newTotal + shippingPrice) / 100}`
  }
}

const changeCartItemQty = (item, delta) => {
  const input = item.querySelector('input')
  let itemQty = +item.querySelector('input').value
  input.value = itemQty + +delta
  changeDisplayedTotal()
}

const plusCartItemQty = (item) => changeCartItemQty(item, '1')
const minusCartItemQty = (item) => changeCartItemQty(item, '-1')

// Add event listeners to buttons for each cart item
cartItems.forEach((item) => {
  const btns = item.querySelectorAll('button')
  const minusBtn = btns[0]
  const plusBtn = btns[1]
  plusBtn.addEventListener('click', () => plusCartItemQty(item))
  minusBtn.addEventListener('click', () => minusCartItemQty(item))
})

// Initializing logic

changeDisplayedTotal()

// Filling out form and local storage logic
const fillOutForm = (form, values) => {
  for (let key in values) {
    const inputField = form.querySelector(`input[name="${key}"]`)
    inputField.value = values[key]
  }
}

// Filling out form if information was saved previously
const storedFormData = localStorage.getItem('formData')
if (storedFormData) {
  fillOutForm(form, JSON.parse(storedFormData))
}

const saveFormDataToLocalStorage = (formData) => {
  const formDataObject = {}
  for (let entry of formData.entries()) {
    // don't save cart values
    if (entry[0].startsWith('qty')) continue

    formDataObject[entry[0]] = entry[1]
  }
  window.localStorage.setItem('formData', JSON.stringify(formDataObject))
}

// for testing purposes
const fillFormWithTestValues = (form) => {
  const values = {
    email: 'test@test.com',
    phone: '123-555-555',
    fullName: 'Valto Amelia',
    address: 'Cool St.',
    city: 'City',
    country: 'AU',
    postalCode: '123400',
  }
  fillOutForm(form, values)
}
