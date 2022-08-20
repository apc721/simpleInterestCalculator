function compute()
{
    // retrieve principal from user
    var principal = Number(document.getElementById("principal").value);
    if (principal <= 0)  // check for valid principal
    {
        alert("Enter a positive number")
        document.getElementById("principal").focus();  // refocus the user
    }
    else
    {
        // retrieve remaining values from user
        var rate = Number(document.getElementById("rate").value);
        var years = Number(document.getElementById("years").value);

        // calculate remaining vars
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
        var total = principal + interest;
        
        // Add commas for improved user readability
        interest = numberWithCommas(interest);
        principal = numberWithCommas(principal)
        total = numberWithCommas(total)
    
        document.getElementById("result").innerHTML="If you deposit $\<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an interest amount of \<br\>$\<mark\>"+interest+"\</mark\>, in the year \<mark\>"+year+"\</mark\> \<br\> for a total of $\<mark\>"+total+"\</mark\>.\<br\>";
        window.update()
    }
    
}

// live update as rate slider moves
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    window.update()
}

// automatically add commas to monetary values
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
        