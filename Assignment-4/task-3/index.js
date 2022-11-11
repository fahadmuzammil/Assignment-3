function creditCardValidation(creditCradNum)
{
var regEx = /^5[1-5][0-9]{14}/;
if(creditCradNum.value.match(regEx))
{
return true;
}
else
{
alert("Please enter a valid credit card number.");
return false;
}
}