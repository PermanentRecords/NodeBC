/*
index.html
Create a basic HTML document
Create a script tag on the document head element
Using the confirm method show the user the following method:
Would you like the author of this document?
If the user confirms the question then we show him the following message
The author is %firstname% %lastname%%
Else we show the following message:
So, So, SOOO, sad.. the author is crying now... thanks
*/
let authorName = window.confirm("Would you like the Author of this document?");
let firstName = Andrew;
let lastName = Nicholls;
if(authorName === true)
{
	alert("The author is %firstName% %lastName%");
}
else 
{
	alert("so, so, soooo sad. The author is crying now... thanks.");
}
