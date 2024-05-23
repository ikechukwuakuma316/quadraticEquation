function test(){
    var a = parseInt(document.getElementById("valueA").value);
    var b = parseInt(document.getElementById("valueB").value);
    var c = parseInt(document.getElementById("valueC").value);

    var ac = -4 * a * c ;
    var power = Math.pow(b, 2);
    var discriminant = power + ac;
    var answerPositive = (-b + Math.sqrt(discriminant)) / (2 * a);
    var answerNegative = (-b - Math.sqrt(discriminant)) / (2 * a);


    if(isNaN(answerNegative || answerPositive) === true) {
        var displayAnswers = document.getElementById('answerID').innerHTML = "Not A Real Solution";
    } else {
         displayAnswers = document.getElementById('answerID').innerHTML = "X1: " + answerPositive + "<br>" + "X2: " + answerNegative;
    }
}
