function sum() {
    const num = document.getElementById("number").value

    const display = document.getElementById('display');
   
    let answer = "";
    let sum = 0;
    for (let a = 1; a <= num; a++){
         answer += a + "<br/>";
        sum += a;
    }
    answer += "The sum is" +sum;
    display.innerHTML = answer;
}
    
function factorial() {
    let number = document.getElementById('number').value;
    let answer = '';
    let product = number;
    let num = number;
    while (num > 1 ) {
        answer += num + "<br/>";
        product *= (num - 1);
        num--;
     }
        answer += num + "<br/>"
        answer += "The factorial of" + number + "is" +product;
        document.getElementById('display').innerHTML = answer;
}

function odd() {
    let number= document.getElementById("number").value
    let answer = "";
    
    for (let b = 1; b <= number; b++){
        if(b % 2 !== 0)
        answer += b + "<br/>";
    }
        document.getElementById('display').innerHTML = answer;
}
  
function even() {
    let number= document.getElementById("number").value
    let answer = "";
    
    for (let d = 1; d <= number; d++){
        if(d % 2 === 0)
        answer += d + "<br/>";
    }
        document.getElementById('display').innerHTML = answer;
}