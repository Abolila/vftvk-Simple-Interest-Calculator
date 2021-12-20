function compute() {

    //clearing old result
    document.getElementById("result").innerHTML = "";

    //getting values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //validating principal
    if (principal == "" || isNaN(principal)) {
        alert("Please insert a valid numeric value");
    }else if (principal <= 0) {
        alert("Enter a positive number");
    } else {

        //calculating result
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);

        //assign result
        document.getElementById("result").innerHTML = "If you deposit "
            + principal + ",\<br\>at an interest rate of "
            + rate + "%.\<br\>You will receive an amount of " +
            interest + ",\<br\>in the year " + year + "\<br\>";
    }
}

function updateRate() {
    //to update value of range
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}