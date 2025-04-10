function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerText = "Result: Enter valid numbers!";
      return;
    }
  
    switch (operation) {
      case 'add': result = num1 + num2; break;
      case 'sub': result = num1 - num2; break;
      case 'mul': result = num1 * num2; break;
      case 'div': result = num2 !== 0 ? num1 / num2 : 'Infinity'; break;
    }
  
    document.getElementById("result").innerText = "Result: " + result;
  }
  