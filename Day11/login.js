const loginForm = document.getElementById("loginForm")
console.log(loginForm);


const emailInput = document.getElementById("email")
const emailError = document.getElementById("emailError")
const passWordInput = document.getElementById("password")
const togglePassword = document.getElementById("password")

const emailRegex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" 

console.log (emailInput)
console.log (passWordInput)
console.log (togglePassword)
console.log (emailError)


emailInput.addEventListener("input",()=>{
    console.log(emailInput.value);
    if (!emailRegex.test(emailInput.value)){
        emailError.classList.remove('hidden')
    }else{
        emailError.classList.add('hidden')
    }
})

togglePassword.addEventListener('click', ()=>){
    passWordInput.setAttribute
}

