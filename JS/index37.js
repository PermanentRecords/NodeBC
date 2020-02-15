/*
Exercise 37
Create a new index37.js file
Define an average variable and assign the following value: 6
Define a studentAverage variable and assign the following value: 4
Show the following output:
This student has a greater or equal average required to pass: true/false
This student is missing %points% to pass
*/

var average = 6;
var studentAverage = 4;
if(studentAverage >= average)
{
	canPass = true;
}
else
{
	canPass = false;
}
console.log("The student has a greater or equal average required to pass: " + %canPass%);
console.log("The student is missing " + %points% + ' to pass.');
