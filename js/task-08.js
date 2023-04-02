const form = document.querySelector('.login-form')
form.addEventListener('submit', proccesLogin)
function proccesLogin(event){
    event.preventDefault()
    const {
        elements: { email, password }
      } = event.currentTarget;
      if (email.value.trim() === "" || password.value.trim() === "") {
        return alert("Please fill in all the fields!");
      }
      const userData = {
        email: email.value,
        password: password.value.trim(),
      }
    console.log(userData)
    event.currentTarget.reset();
}

