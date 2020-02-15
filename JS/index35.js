/*
Exercise 35
Create a new index35.js file
Define the clientId variable and assign the following value: 143245
Define the inputClientId variable and assign the following value: '143245'
Show as output if the input client id is the same as the client id value (use comparison by value)
Example: The input client id is correct by value? true or false
Show as output if the input client id is the same as the client id value (use comparison by value & type)
Example: The input client id is correct by value and type? true or false
*/
var clientID = 143245;
var inputClientID = 143245;
if(clientID == inputClientID)
{
	clientMatch = true;
	console.log("The client's input is verified.");
}
else
{
	clientMatch = false;
	console.log("User authentication failed.");
}

