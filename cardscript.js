window.onload=function()
{
    let ccNum  = document.getElementById("ccnumber");
    let msg    = document.getElementById("msgccnumber");
    let card   = document.getElementById("addcard");
    var t = true;

    ccNum.oninput = function(){
    document.getElementById("ccbandeira").innerHTML="<img style='display: grid;transform: translateY(-34px);' src='ccbandeira.png'>"       
        var oRegExp = new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$");
        if (oRegExp.test(ccNum.value) == true) {
            document.getElementById("ccnumber").style.borderColor = "#f5f5f5";
            msg.innerHTML="";
            t = true;
            

            
        } else {
            ccNum.style.borderColor = "#d13434";
            msg.innerHTML="<p style='color:#d13434; font-size:14px;'>Número de cartão incorreto. Tente novamente.</p>";
            t = false;
        }
    }













    let ccExp = document.getElementById("cc-exp");
    let expMsg = document.getElementById("msgccExp");
    ccExp.oninput = function(){
        if ((ccExp.value).length >= 4){
            ccExp.style.borderColor = "#f5f5f5";
            expMsg.innerHTML="";
            t = true;
            

        
        } else {
            ccExp.style.borderColor = "#d13434";
            expMsg.innerHTML="<p style='color:#d13434; font-size:14px;'>Data incorreta. Tente novamente.</p>";
            t = false;
        }
    }













    let ccCsc = document.getElementById("cc-csc");
    let msgCsc = document.getElementById("msgcccsc");
    ccCsc.oninput=function(){
        if ((ccCsc.value).length == 3 || (ccCsc.value).length == 4){
            ccCsc.style.borderColor = "#f5f5f5";
            msgCsc.innerHTML="";
            t = true;
            if (t == true) {
                card.style.display = "block";
            }
            

        } else {
            ccCsc.style.borderColor = "#d13434";
            msgCsc.innerHTML="<p style='color:#d13434; font-size:14px;'>Código inválido. Tente novamente.</p>";
            t = false;

        }
    }






    let cpf = document.getElementById("cpf");
    let msgCpf = document.getElementById("msgCpf");
    cpf.oninput=function(){
        if ((cpf.value).length == 11 || (cpf.value).length == 14){
            cpf.style.borderColor = "#f5f5f5";
            msgCpf.innerHTML="";
            t = true;
            if (t == true) {
                card.style.backgroundColor = "#3e9920"
            }
        } else {
            cpf.style.borderColor = "#d13434";
            msgCpf.innerHTML="<p style='color:#d13434; font-size:14px;'>Código inválido. Tente novamente.</p>";
            t = false;
        }
    }
}