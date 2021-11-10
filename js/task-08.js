const form = document.querySelector('.login-form')

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

    event.preventDefault();
    
  const { elements: { email, password } } = event.currentTarget;

    if (email.value && password.value) {

        const objForSubmit = { email: email.value, password: password.value };

        console.log(objForSubmit);
    
        event.currentTarget.reset();
    
    } else {

        return alert("Все поля должны быть заполнены")
    };
 
};





