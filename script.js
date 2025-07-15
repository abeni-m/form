let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let username = document.getElementById("username");
    let mpassword = document.getElementById("mpassword");
    let rpassword = document.getElementById("rpassword");
    if ((mpassword.value.length >= 8) && (rpassword.value.length >= 8)) {
        if (((mpassword.value) === (rpassword.value)
        )) {
            document.getElementById("theform").innerHTML = `<h1> Hey ${username.value} we are happy to get you.</h1>`;
        }
        else {
            alert("password doesn't match");
        }
    }
    else {
        alert("invalid password length");
    }
    alert(screen.width);
})