function addition () {
    document.getElementById('operator').value =  "+";
    const display =  document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}
function division () { 
    document.getElementById('operator').value =  "/";
    const display =  document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}
function multiplication() {  
    document.getElementById('operator').value = "*";
    const display =  document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}
function subtraction () {
   document.getElementById('operator').value = "-";
   const display =  document.getElementById('display').value;

   if (display !== "0") {
       document.getElementById('display2').value = display;
       document.getElementById('display').value = "0";
   }
}
function equal () {  
    const  num = document.getElementById('display').value;
    const  num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    let answer;

    if (opeartor == "+") {
        answer = Number(num2) + Number(num);
    }
    else if (operator == "-") { 
        answer = Number(num2) - Number(num);
    }
    else if (operator == "*") {
        answer = Number(num2) * Number(num);
    }
    else if (operator == "/") {
        answer = Number(num2) / Number(num);
    }

    document.getElementById('display2').value = answer;
    document.getElementById('display').value = "0" ;
    document.getElementById('operator').value = "0" ;
}
    
function dot () {
    document.getElementById('operator').value = ".";
    const display =  document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }
}