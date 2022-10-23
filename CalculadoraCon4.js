const resultado = document.querySelector(".display");
let opc1="";
let opc2="";
let operacion="";


function clr() {
    opc1="";
    opc2="";
    operacion="";
    resultado.innerHTML="0";
}
function press(num) {
    opc1=opc1+num;
    resultado.innerHTML=opc1;
}
function setOP(tipo) {
    operacion=tipo;
    opc2=opc1;
    opc1="";
    if (operacion=="*") {
        tipo="x";
    }else if (operacion=="/") {
        tipo="÷";
        }
    resultado.innerHTML=tipo;
    }

function calculate() {
    //alert(opc1 + " oper="+ operacion +" opc2="+ opc2);
    let res=eval(opc2 + operacion + opc1);
    opc1=res;
    operacion="";
    resultado.innerHTML=res;
}
