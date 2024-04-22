const button=document.getElementById('register-button')
const password=document.getElementById('password')
constemail=document.getElementById('email')


button.addEventListener('click',()=> {
    if (password.value==='1234'&email.value==='admin@admin.com')  {

        alert('login sucessful')
    } else {

        alert('login failed')
    }
})
