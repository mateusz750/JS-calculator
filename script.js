document.addEventListener('DOMContentLoaded', (event) => {
	var firstNumber = document.getElementById('firstNumber');
	var secondNumber = document.getElementById('secondNumber');
	var sign = document.getElementById('select');
	var submitBtn = document.getElementById('submitButton');
	
	submitBtn.addEventListener("click", myFunction);
	function myFunction() {
		var firstNumberValue = parseInt(firstNumber['value']);
		var secondNumberValue = parseInt(secondNumber['value']);
		var selectValue = sign['value'];
		
		var amount = 0;
		
		if (selectValue == '+') {
			amount = (firstNumberValue + secondNumberValue);
		} else if (selectValue == '-') {
			amount = (firstNumberValue - secondNumberValue);
		} else if (selectValue == '*') {
			amount = (firstNumberValue * secondNumberValue);
		} else if (selectValue == '/') {
			amount = (firstNumberValue / secondNumberValue);
		}
		var span = document.createElement('span');
		span.innerHTML = '<p>' + amount + '</p>';
		document.body.appendChild(span);
	}
	 
});