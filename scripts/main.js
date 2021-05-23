// Button text
function addItem(id){

	var button = document.getElementById(id);
	if (button.innerHTML == "Add"){
		button.innerHTML = "Added!";
		button.style.background = "#91CB3E";
	}
	else{
		button.innerHTML = "Add";
		button.style.background = "white";
	}
}


// This function is used to open one of the 3 tabs when they are clicked
// Adapted from: https://www.w3schools.com/howto/howto_js_tabs.asp

function openTab(evt, tabName){
	// Declare variables
	var i, tabcontent, tablinks;

	// Hide tab contents
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}

	// Remove the class active from tab links
	tablinks = document.getElementsByClassName("tablinks");
	for (i=0; i<tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active","");
	}

	// Show current tab and add "active" class to its button
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Generate checkbox list from product list

function populateListProductChoices(id1, id2, id3) {
    var s1 = document.getElementById(id1);
    var s2 = document.getElementById(id2);
    var s3 = document.getElementById(id3);
	


	// s2 represents the <div> in the products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
    s3.innerHTML = "";
    var text1 = document.createElement("P");
    var words1 = document.createTextNode("Here is a list of products selected based on your personal preferences.");
    text1.appendChild(words1);
    var text2 = document.createElement("P");
    var words2 = document.createTextNode("Select the items you wish to purchase. Then, click the Cart tab when you are ready to check out and see your total.");
    text2.appendChild(words2);
    s3.appendChild(text1);
    s3.appendChild(text2);

		
	// obtain a reduced list of products based on restrictions
    var optionArray = personalizeProducts(prods, s1.value, id3);

	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var image = optionArray[i].image;

		// create div for item
		var newDiv = document.createElement("div");

		// give div id and unique class name
		var uniqueClassName = "item"+i;
		newDiv.className = uniqueClassName;
		newDiv.id = "item";
		
		s2.appendChild(newDiv);

		// add product image
		var img = document.createElement("IMG");
		img.setAttribute("src",image);
		newDiv.appendChild(img);

		// add product name
		var name = document.createElement("H5");
		var headerText = document.createTextNode(productName);
		name.className = "itemName";
		name.appendChild(headerText);
		newDiv.appendChild(name);

		// add product price
		var price = document.createElement("p");
		var paraText = document.createTextNode("$"+productPrice.toFixed(2));
		price.className = "itemPrice";
		price.appendChild(paraText);
		newDiv.appendChild(price);

		// add button
		var button = document.createElement("BUTTON");
		var uniqueButtonId = "add"+i;
		var buttonText = document.createTextNode("Add");
		button.id = uniqueButtonId;
		button.className = "button";
		button.appendChild(buttonText);
		button.onclick = function() {addItem(this.id)};
		newDiv.appendChild(button);

	}
}

	
// This function is called when Cart tab is clicked to generate the list of products added
function selectedItems(){
	
	var items = document.getElementsByClassName("itemName");
	var itemPrices = document.getElementsByClassName("itemPrice");
	var chosenProducts = [];
	var buttons = document.getElementsByClassName("button");
	
	var cart = document.getElementById('displayCart');
	cart.innerHTML = "";
	

	if (items.length==0){
		// message to say no items have been added
		var para = document.createElement("P");
		para.innerHTML = "No items have been added to your cart.";
		para.appendChild(document.createElement("br"));
		cart.appendChild(para);
	}

	else{
		// build list of selected items
		var para = document.createElement("P");
		para.innerHTML = "The following items have been added to your cart:";
		para.appendChild(document.createElement("br"));

		// create div for heading
		var newDiv1 = document.createElement("div");
		newDiv1.className = "bought heading";
		cart.appendChild(newDiv1);
		// add product header
		var prodHead = document.createElement("p");
		prodHead.className = "prod";
		var prodText = document.createTextNode("Product");
		prodHead.appendChild(prodText);
		newDiv1.appendChild(prodHead);
		// add price header
		var priceHead = document.createElement("p");
		prodHead.className = "cost";
		var priceText = document.createTextNode("Price");
		priceHead.appendChild(priceText);
		newDiv1.appendChild(priceHead);

		// add products to list
		for (i = 0; i < items.length; i++) { 
			if (buttons[i].innerHTML == "Added!") {
				// create div for product
				var newDiv = document.createElement("div");
				newDiv.className = "bought"
				cart.appendChild(newDiv);
				// add product name
				var prodName = document.createElement("p");
				prodName.className = "prod";
				var nameText = document.createTextNode(items[i].innerHTML);
				prodName.appendChild(nameText);
				newDiv.appendChild(prodName);
				// add product price
				var prodPrice = document.createElement("p");
				prodPrice.className = "cost";
				var prodPriceText = document.createTextNode(itemPrices[i].innerHTML);
				prodPrice.appendChild(prodPriceText);
				newDiv.appendChild(prodPrice);

				chosenProducts.push(items[i].innerHTML);
			}
		}

		// create div for total
		var newDiv2 = document.createElement("div");
		newDiv2.className = "bought total";
		cart.appendChild(newDiv2);
		// add total header
		var totalHead = document.createElement("p");
		totalHead.className = "prod";
		var totalText = document.createTextNode("Total");
		totalHead.appendChild(totalText);
		newDiv2.appendChild(totalHead);
		// add price header
		var totalAmount = document.createElement("p");
		totalAmount.className = "cost";
		var totalText = document.createTextNode(calculatePrice(chosenProducts));
		totalAmount.appendChild(totalText);
		newDiv2.appendChild(totalAmount);
	}	

}
