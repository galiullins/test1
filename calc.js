function plus(){
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    //inner HTML
    document.getElementById('result').innerHTML = result;

}

function minus(){
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    //inner HTML
    document.getElementById('result').innerHTML = result;

}

function multiply(){
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    //inner HTML
    document.getElementById('result').innerHTML = result;

}

function devide(){
    var num1, num2;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    function result(){
        var total = num1 / num2;
        if (num2 == 0) {
            return "Делить на ноль нельзя";
        } else {
            return total;
        }
    }
    //inner HTML
    document.getElementById('result').innerHTML = result();

}