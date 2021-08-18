//Calculate the interest according to the user inputs.
function compute()
{
    var interest;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //Check if the amount value is not 0 or negative
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    //Calculate the interest generated.
    interest = principal * years * rate /100;
    //Convert the 'No of Years' into the actual year in the future.
    var year = new Date().getFullYear()+parseInt(years);

    var result_span = document.getElementById("result");
    var resutlString = "If you deposit " +principal +",\n"
    +"at an interest rate of " +rate +"%.\n" 
    +"You will receive an amount of " +interest +", \n" 
    +"in the year " +year;

    result_span.innerHTML = resutlString;
}

//Updates the rate element value.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= " "+rateval +"%";
}
        