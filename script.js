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

    //Highlight the variables values of the output
    var principalYellow = principal.replace(
        principal,
        `<mark class="highlight">${principal}</mark>`);

    var rateYellow = rate.replace(
        rate,
        `<mark class="highlight">${rate}</mark>`);
    
    var interestStr = interest.toString();    
    var interestYellow = interestStr.replace(
        interestStr,
        `<mark class="highlight">${interestStr}</mark>`);

    var yearStr = year.toString();
    var yearYellow = yearStr.replace(
        yearStr,
        `<mark class="highlight">${year}</mark>`);
    
    //Concatenate the result string
    var result_span = document.getElementById("result");
    var resutlString = "If you deposit " +principalYellow +",\n"
    +"at an interest rate of " +rateYellow +"%.\n" 
    +"You will receive an amount of " +interestYellow +", \n" 
    +"in the year " +yearYellow; 
   
    

    result_span.innerHTML = resutlString;
}

//Updates the rate element value.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= " "+rateval +"%";
}
        