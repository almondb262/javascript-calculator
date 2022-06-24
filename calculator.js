const firstNum = parseFloat(prompt ('Enter first number: ')); 
const secondNum = parseFloat(prompt ('Enter second number: ')); 
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): '); 

  
let result;   
if (operator == '+') { 
    result = firstNum + secondNum;  
}  
else if (operator == '-') { 
    result = firstNum - secondNum;  
}  
else if (operator == '*') { 
    result = firstNum * secondNum;  
}  
else {  
    result = firstNum / secondNum;
}  

window.alert(" Result is" +" " + result);  