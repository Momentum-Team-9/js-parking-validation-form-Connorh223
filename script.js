let formIsValid


console.log('Add validation!');
// name
const nameField = document.getElementById("name-field")
console.log(nameField)
let nameIsValid 
  // if (nameIsValid)
  // return true
  // else
  // return false

// car
const carField = document.getElementById("car-field")
console.log(carField)

// number of days
const daysField = document.getElementById("days-field")
console.log(daysField)

// Date parking
const startDateField = document.getElementById("start-date-field")
console.log(startDateField)

// credit card
const creditCardField = document.getElementById("credit-card-field")
console.log(creditCardField)

//cvv
const cvvField = document.getElementById("cvv-field")
console.log(cvvField)

// expiration
const expirationField = document.getElementById("expiration-field")
console.log(expirationField)

// Make reservation
const submitButton = document.getElementById("submit-button")
console.log(submitButton)

submitButton.addEventListener('click', function (event) {
    console.log('input captured')
    // event.preventDefault()
  })