 function insertLogin(){
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value


    localStorage.setItem('UserEmail',email)
    localStorage.setItem('Password',password)




}