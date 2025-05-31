const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const lastname_input = document.getElementById('lastname-input')
const phonenumber_input = document.getElementById('phonenumber-input')
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
// e.preventDefault() Prevent Submit


let errors = []

if(firstname_input){
    // if we have a firstname input then we are in the signup
   errors = getSignupFormErrors(firstname_input.value, lastname_input.value, phonenumber_input.value)
}
else{
    // if there is no first name input then we are in the login
    errors = getLoginFormErrors(firstname_input.value, lastname_input.value, phonenumber_input.value)
  }
  if(errors.length > 0){
    // if there are any errors
    e.preventDefault()
    error_message.innerText = errors.join(".")
  }
})

function getSignupFormErrors(firstname, lastname, phonenumber){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(lastnamename === '' || lastname == null){
        errors.push('Lastname is required')
        lastname_input.parentElement.classList.add('incorrect')
    }
    if(phonenumber === '' || phonenumber == null){
        errors.push('Phonenumber is required')
        phonenumber_input.parentElement.classList.add('incorrect')
    }

    return errors;
    }
   
