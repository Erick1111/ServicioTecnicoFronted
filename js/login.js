
var u = document.getElementById('user');
var p = document.getElementById('pass');
u.style.display = 'none';
p.style.display = 'none';

function validate(){
    const username = 'erick';
    const password = 'erick';
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
    if(user === username && pass ===password){

        console.log("index1.html")
        window.location="index1.html";
    }
    else
    {
        console.log("error de autenticacion")
        // u.style.display = 'block';
        // p.style.display = 'block';
        // u.style.color = 'red';
        // p.style.color = 'red';
        u.style.cssText='display:block;color:red;';
        p.style.cssText='display:block;color:red;';
    }
}
