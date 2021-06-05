// Change text of button when product is added (or removed)
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

function addRecipe(id){
	var button = document.getElementById(id);
	if (button.innerHTML == "Add"){
		button.innerHTML = "Added!";
		button.style.background = "#91CB3E";
		addIngredients(id);
	}
	else{
		button.innerHTML = "Add";
		button.style.background = "white";
		removeIngredients(id);
	}
}

// Display nutrition facts of item
function nutritionFacts(id){

	var button = document.getElementById(id);
	var itemId = "item"+id.slice(3);
	var product = document.getElementById(itemId);

	if (button.style.background == "white"){
		button.style.background = "#91CB3E";
		button.innerHTML = prods.find(obj => {return obj.name === product.innerHTML}).calories+" cals";
	}
	else{
		button.style.background = "white";
		button.innerHTML = "Nutrition Facts";
		
	}
}

// Generate list of products based on user preferences
// Inspired by/adapted from professor's code
function populateListProductChoices(id2, id3) {

    var s2 = document.getElementById(id2);
    var s3 = document.getElementById(id3); //intro text

	// s2 represents the <div> in the products tab, which shows the product list
	// set it empty first
    s2.innerHTML = "";
    s3.innerHTML = "";
    var text1 = document.createElement("P");
    var words1 = document.createTextNode("Here is a list of products selected based on your personal preferences. You can view the nutritional information by clicking 'Nutrition Facts'. Click again to hide this information.");
    text1.appendChild(words1);
    var text2 = document.createElement("P");
    var words2 = document.createTextNode("Select the items you wish to purchase by clicking 'Add'. Click again if you decide you do not wish to purchase the item. Then, click the Cart tab when you are ready to check out and see your total.");
    text2.appendChild(words2);
    s3.appendChild(text1);
    s3.appendChild(text2);

		
	// obtain a reduced list of products based on restrictions
    var optionArray = personalizeProducts(prods);

	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var productCals = optionArray[i].calories;
		var image = optionArray[i].image;

		// create div for whole item
		var newDiv = document.createElement("div");

		// give div id
		newDiv.id = "item";

		// create div for product info
		var newDiv2 = document.createElement("div");
		//var uniqueClassName2 = "prodInfo"+i;
		//newDiv2.className = uniqueClassName2;
		newDiv2.id = "prodInfo";

		// append new div tags
		s2.appendChild(newDiv);
		newDiv.appendChild(newDiv2);
		// newDiv.appendChild(newDiv3);

		// add product image
		var img = document.createElement("IMG");
		img.setAttribute("src",image);
		newDiv2.appendChild(img);

		// add product name
		var name = document.createElement("H5");
		var uniqueNameId = "item"+i;
		var headerText = document.createTextNode(productName);
		name.id = uniqueNameId;
		name.className = "itemName";
		name.appendChild(headerText);
		newDiv2.appendChild(name);

		// add product price
		var price = document.createElement("p");
		var uniquePriceId = "price"+i;
		var paraText = document.createTextNode("$"+productPrice.toFixed(2));
		price.id = uniquePriceId;
		price.className = "itemPrice";
		price.appendChild(paraText);
		newDiv2.appendChild(price);

		// add button for nutrition facts
		var button1 = document.createElement("BUTTON");
		var uniqueButtonId1 = "nut"+i;
		var buttonText1 = document.createTextNode("Nutrition Facts");
		button1.id = uniqueButtonId1;
		button1.className = "button1";
		button1.appendChild(buttonText1);
		newDiv2.appendChild(button1);
		button1.onclick = function() {nutritionFacts(this.id)};
		
		// add button to add item
		var button2 = document.createElement("BUTTON");
		var uniqueButtonId2 = "add"+i;
		var buttonText2 = document.createTextNode("Add");
		button2.id = uniqueButtonId2;
		button2.className = "button2";
		button2.appendChild(buttonText2);
		button2.onclick = function() {addItem(this.id)};
		newDiv2.appendChild(button2);

	}
}


// code from W3Schools Accordion tutorial and a StackOverflow thread
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol
// https://stackoverflow.com/questions/55363898/how-to-close-accordion-panels-when-another-one-opens#:~:text=You%20can%20use%20one%20more,accordion%20if%20it%20is%20opened.

var acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  	this.classList.toggle("active");

  	for (let j = 0; j < acc.length; j++) {
    acc[j].classList.remove("active");
      if(j!=i){
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }
    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

	
// This function generates the list of products added and calculates the total price
// Inspired by/adapted from professor's code
function selectedItems(){
	
	var items = document.getElementsByClassName("itemName");
	var itemPrices = document.getElementsByClassName("itemPrice");
	var chosenProducts = [];
	var buttons = document.getElementsByClassName("button2");

	var miscItems = document.getElementsByClassName("miscItemName");
	var miscItemPrices = document.getElementsByClassName("miscItemPrice");
	var buttons2 = document.getElementsByClassName("miscButton");
	
	
	var cart = document.getElementById('displayCart');
	cart.innerHTML = "";


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
	priceHead.className = "cost";
	var priceText = document.createTextNode("Price");
	priceHead.appendChild(priceText);
	newDiv1.appendChild(priceHead);

	// add products to list
	for (i = 0; i < items.length; i++) { 
		if (buttons[i].innerHTML == "Added!") {
			// create div for product
			var newDiv = document.createElement("div");
			newDiv.className = "bought";
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

	// add non-food products to list
	for (i = 0; i < miscItems.length; i++) { 
		if (buttons2[i].innerHTML == "Added!") {
			// create div for product
			var newDiv = document.createElement("div");
			newDiv.className = "bought";
			cart.appendChild(newDiv);
			// add product name
			var prodName = document.createElement("p");
			prodName.className = "prod";
			var nameText = document.createTextNode(miscItems[i].innerHTML);
			prodName.appendChild(nameText);
			newDiv.appendChild(prodName);
			// add product price
			var prodPrice = document.createElement("p");
			prodPrice.className = "cost";
			var prodPriceText = document.createTextNode(miscItemPrices[i].innerHTML);
			prodPrice.appendChild(prodPriceText);
			newDiv.appendChild(prodPrice);

			chosenProducts.push(miscItems[i].innerHTML);
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

// list non-food products
function listMiscProducts(id1, id2){

	var div = document.getElementById(id1);
	var div2 = document.getElementById(id2);

	// s2 represents the <div> in the products tab, which shows the product list
	// set it empty first
    div.innerHTML = "";
    div2.innerHTML = "";
    var text1 = document.createElement("P");
    var words1 = document.createTextNode("Here is a list of miscellaneous products, that you can purchase along with your groceries. Products include personal hygiene products, cleaning supplies, and kitchen supplies.");
    text1.appendChild(words1);
    var text2 = document.createElement("P");
    var words2 = document.createTextNode("Select the items you wish to purchase by clicking 'Add'. Click again if you decide you do not wish to purchase the item. Then, click the Cart tab when you are ready to check out and see your total.");
    text2.appendChild(words2);
    div2.appendChild(text1);
    div2.appendChild(text2);

    var array = miscProds.sort(function(a,b){
    	return a.price-b.price;
    });

    for (i = 0; i < array.length; i++) {
			
		var productName = array[i].name;
		var productPrice = array[i].price;
		var image = array[i].image;

		// create div for whole item
		var newDiv = document.createElement("div");
		// give div id
		newDiv.id = "miscItem";

		// append new div tags
		div.appendChild(newDiv);

		// add product image
		var img = document.createElement("IMG");
		img.setAttribute("src",image);
		newDiv.appendChild(img);

		// add product name
		var name = document.createElement("H5");
		var uniqueNameId = "miscItem"+i;
		var headerText = document.createTextNode(productName);
		name.id = uniqueNameId;
		name.className = "miscItemName";
		name.appendChild(headerText);
		newDiv.appendChild(name);

		// add product price
		var price = document.createElement("p");
		var uniquePriceId = "miscPrice"+i;
		var paraText = document.createTextNode("$"+productPrice.toFixed(2));
		price.id = uniquePriceId;
		price.className = "miscItemPrice";
		price.appendChild(paraText);
		newDiv.appendChild(price);
		
		// add button to add item
		var button = document.createElement("BUTTON");
		var uniqueButtonId = "addMisc"+i;
		var buttonText = document.createTextNode("Add");
		button.id = uniqueButtonId;
		button.className = "miscButton";
		button.appendChild(buttonText);
		button.onclick = function() {addItem(this.id)};
		newDiv.appendChild(button);

	}
}


function listRecipes(id1, id2){

	var div = document.getElementById(id1); // displayRecipe div
    var div2 = document.getElementById(id2); // intro text

	// s2 represents the <div> in the products tab, which shows the product list
	// set it empty first
    div.innerHTML = "";
    div2.innerHTML = "";
    var text1 = document.createElement("P");
    var words1 = document.createTextNode("Here is a list of recipes based on your personal preferences.");
    text1.appendChild(words1);
    var text2 = document.createElement("P");
    var words2 = document.createTextNode("Select the recipes you wish to make by clicking 'Add'. Click again if you decide you do not wish to make the recipe.");
    text2.appendChild(words2);
    var text3 = document.createElement("P");
    var words3 = document.createTextNode("All of the ingredients required to make the recipes that have been added, will be put in your cart. Click the Cart tab to view the total price of your items.");
    text3.appendChild(words3);
    var text4 = document.createElement("P");
    var words4 = document.createTextNode("You may add or remove individual items from the Products tab as well.");
   	text4.appendChild(words4);
    div2.appendChild(text1);
    div2.appendChild(text2);
    div2.appendChild(text3);
    div2.appendChild(text4);

		
	// obtain a reduced list of products based on restrictions
    var array = personalizeRecipes(recipes);

	for (i = 0; i < array.length; i++) {
			
		var recipeName = array[i].name;
		var ingredients = array[i].ingredients;
		var image = array[i].image;

		// create div for whole recipe
		var newDiv = document.createElement("div");

		// give div id
		newDiv.id = "recipe";

		// append new div tags
		div.appendChild(newDiv);
		
		// add recipe image
		var img = document.createElement("IMG");
		img.setAttribute("src",image);
		newDiv.appendChild(img);

		// add recipe name
		var name = document.createElement("H5");
		var uniqueNameId = "recipe"+i;
		var headerText = document.createTextNode(recipeName);
		name.id = uniqueNameId;
		name.className = "recipeName";
		name.appendChild(headerText);
		newDiv.appendChild(name);

		// add ingredients
		var ingr = document.createElement("p");
		var uniqueIngrId = "ingredients"+i;
		var ingrList = "";

		for (j=0; j<ingredients.length; j++){
			if (j<(ingredients.length-1)){
				ingrList = ingrList + ingredients[j] + " / ";
			}else{
				ingrList = ingrList + ingredients[j];
			}
			
		}

		var paraText = document.createTextNode(ingrList);
		ingr.id = uniqueIngrId;
		ingr.className = "ingredients";
		ingr.appendChild(paraText);
		newDiv.appendChild(ingr);
		
		// add button to add recipe
		var button = document.createElement("BUTTON");
		var uniqueButtonId = "addR"+i;
		var buttonText = document.createTextNode("Add");
		button.id = uniqueButtonId;
		button.className = "button";
		button.appendChild(buttonText);
		button.onclick = function() {addRecipe(this.id)};
		newDiv.appendChild(button);

	}

}

function addIngredients(id){
	// var button = document.getElementById(id);
	//var recipeId = "recipe"+id.slice(4);
	//var recipe = document.getElementById(recipeId);
	var ingredientsId = "ingredients"+id.slice(4);
	var ingredients = document.getElementById(ingredientsId).innerHTML;
	var items = document.getElementsByClassName("itemName");

	ingredients = ingredients.split("/");

	for (i=0; i<ingredients.length; i++){
		var searchItem = ingredients[i].trim();
		for (j=0; j<items.length; j++){
			if (items[j].textContent==searchItem){
				var prodButtonId = "add"+j.toString();
				var prodButton = document.getElementById(prodButtonId);
				if (prodButton.innerHTML=="Add"){
					addItem(prodButtonId);
				}
				break;
			}
		}
	}
}

function removeIngredients(id){
	var ingredientsId = "ingredients"+id.slice(4);
	var ingredients = document.getElementById(ingredientsId).innerHTML;
	var items = document.getElementsByClassName("itemName");

	ingredients = ingredients.split("/");

	for (i=0; i<ingredients.length; i++){
		var searchItem = ingredients[i].trim();
		for (j=0; j<items.length; j++){
			if (items[j].textContent==searchItem){
				var prodButtonId = "add"+j.toString();
				var prodButton = document.getElementById(prodButtonId);
				if (prodButton.innerHTML=="Added!"){
					addItem(prodButtonId);
				}
				break;
			}
		}
	}

}
