document.getElementById("btn").addEventListener("click", send);

function send () {
    let pingInput = document.querySelector("#email")
    let pingBtn = document.querySelector("error")
    if (!email.checkValidity == "") {
        document.getElementById("msg").innerHTML = "Please provide a valid email address";
    }   else {
        document.getElementById("msg").innerHTML = "";
    }
    email.style.outline = "1px solid red";
    document.getElementById("email").value = "";
}