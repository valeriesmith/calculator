calcString = ""

function initialize() {
	clickNumButton();
	clickOpButton();
}

function makeCalc() {
	for (i = 1; i <= 9; i ++) {
		if (i % 3 == 0) {
			$("#calculator").append("<div class=\"number\" id=" + i + ">" + i + "</div><br>");
		} else {
			$("#calculator").append("<div class=\"number\" id=" + i + ">" + i + "</div>");
		};

	};
	$("#calculator").append("<div class=\"number\" id=\"0\">0</div>");
	var operatorArray = ["+","-","*","/","=","clear"]
	for (i = 0; i < operatorArray.length; i ++) {
		$("#operators").append("<div class=\"operator\" id=" + i + ">" + operatorArray[i] + "</div>");
	};
	initialize();	
}

function clickNumButton() {
	$(".number").on("click", function() {
		var num = $(this).text();
		calcString += num;
		console.log(calcString);
	});
}	

function clickOpButton() {
	$(".operator").on("click", function() {
		var operator = $(this).text();
		if (operator == "clear") {
			clearString();
 			console.log(calcString);
		} else if (operator == "=") {
			console.log(processExpression());
		} else {
			calcString += operator;
		};
	});
}

function clearString(){
	calcString = "";
}

function processExpression(){
	return eval(calcString);
}

makeCalc();




