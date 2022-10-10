function validate () {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Your email is valid";
        text.style.color = "#4caf50"
    }
    else {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Please enter a valid email";
        text.style.color = "#f44336"
    }

    if (email == "") {
        form.classList.remove('valid')
        form.classList.remove('invalid');
        text.innerHTML = ""
    }

}

const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {

            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            this.classList.toggle("bi-eye");
        });