//Source: http://javascript-coder.com/javascript-form/javascript-calculator-script.phtml
var roomPrices = new Array();
roomPrices["Room1"]=194.99;
roomPrices["Room2"]=349.99;
roomPrices["Room3"]=749.99;

var daily_rates= new Array();
daily_rates["1"]=1;
daily_rates["2"]=2;
daily_rates["3"]=3;
daily_rates["4"]=4;
daily_rates["5"]=5;
daily_rates["6"]=6;
daily_rates["7"]=7;
daily_rates["8"]=8;
daily_rates["9"]=9;
daily_rates["10"]=10;
daily_rates["11"]=11;
daily_rates["12"]=12;
daily_rates["13"]=13;
daily_rates["14"]=14;

function getRoomPrice()	{
    var roomPrice=0;

    var theForm = document.forms["priceform"];
    
    var selectedRoom = theForm.elements["selectedroom"];
    
    for(var i = 0; i < selectedRoom.length; i++)	{
        //if the radio button is checked
        if(selectedRoom[i].checked)	{
            roomPrice = roomPrices[selectedRoom[i].value];
            break;
        }
    }
    return roomPrice;
}

//This function finds the filling price based on the
//drop down selection
function getDailyRate()	{
    var DailyRateTotal=0;
    
    var theForm = document.forms["priceform"];
    
    var selectedDays = theForm.elements["days"];

    DailyRateTotal = daily_rates[selectedDays.value];
 
    return DailyRateTotal;
}	

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var finalPrice = getRoomPrice() * getDailyRate();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = '$' + finalPrice.toFixed(2);

}



