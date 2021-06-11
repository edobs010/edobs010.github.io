// submit button at bottom of page
function submitMessage(){
	var text = document.getElementsByClassName("submit-msg");
	for (let i = 0; i < text.length; i++) {
		text[i].value = "";
	}
	// var message = document.getElementById("confirmation-msg");
	// var para = document.createElement("p");
	// var msg = document.createTextNode("Thank you for contacting Flex Physio. We will get back to you as soon as we can.");
	// para.appendChild(msg);
	// message.appendChild(para);
}