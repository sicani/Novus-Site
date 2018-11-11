// variables
var sign = 'Business Card';
var bizCards = 0.0599;
var tiles = '300';
var subTotal = tiles * bizCards; //5.99 for 100 cards
var shipping = 3.99;
var grandTotal = subTotal + shipping;

// variables for date
var today = new Date();
var dd = today.getDate();
var mon = today.getMonth()+1; //January = 0, now = 1
var yyyy = today.getFullYear();
var currentDate = mon + '/' + dd + '/' + yyyy;

if(dd<10) {
	dd = '0'+dd
} 

// variables for time
var time = new Date();
var hh = time.getHours();
if(hh<10)	{
	hh = '0'+hh
}
if(hh>12)	{
	hh = hh-12
}

var mm = time.getMinutes();
if(mm<10)	{
	mm = '0'+mm
}

var currentTime = hh + ':' + mm;
var meridiem = 'am';

if(hh>11)	{
	meridiem = 'pm'
}

else	{
	meridiem = 'am'
}
		  
// shows date and time in html
var el = document.getElementById('thisDate');
el.textContent = 'Purchased ' + currentDate + ' at ' + currentTime + meridiem;



// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var el = document.getElementById('userEmail');
elSign.textContent = userEmail;

// Get the element that has an id of bizCards
var el = document.getElementById('bizCards');
el.textContent = '$' + bizCards;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML instead of textContent, but note the security issues on p228-231

In the first print run, line 33-34 repeated elSubTotal (rather than elShipping).
This was fixed in later print runs and in this code sample.
*/