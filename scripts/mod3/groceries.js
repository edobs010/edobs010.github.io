// Inspired by/adapted from professor's code

// Array of products
var prods = [
	{
		name: "Apple",
		price: 0.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 70,
		image: "photos/apple.png"
	},
	{
		name: "Apple (Organic)",
		price: 1.79,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 70,
		image: "photos/organicapple.png"
	},
	{
		name: "Peanut Butter (Organic)",
		price: 6.75,
		dairy: false,
		nuts: true,
		organic: true,
		meat: false,
		gluten: false,
		calories: 90,
		image: "photos/pb.png"
	},
	{
		name: "Peanut Butter",
		price: 5.75,
		dairy: false,
		nuts: true,
		organic: false,
		meat: false,
		gluten: false,
		calories: 90,
		image: "photos/pb2.png"
	},
	{
		name: "Milk",
		price: 4.00,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 110,
		image: "photos/milk.png"
	},
	{
		name: "Bagels",
		price: 3.50,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 205,
		image: "photos/bagels.png"
	},
	{
		name: "Cream Cheese",
		price: 2.99,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 40,
		image: "photos/creamcheese.png"
	},
	{
		name: "Almonds",
		price: 8.15,
		dairy: false,
		nuts: true,
		organic: false,
		meat: false,
		gluten: false,
		calories: 160,
		image: "photos/almonds.png"
	},
	{
		name: "Steak",
		price: 11.25,
		dairy: false,
		nuts: false,
		organic: false,
		meat: true,
		gluten: false,
		calories: 130,
		image: "photos/steak.png"
	},
	{
		name: "Broccoli",
		price: 3.10,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/broccoli.png"
	},
	{
		name: "Broccoli (Organic)",
		price: 3.60,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/broccoli.png"
	},
	{
		name: "Grean Beans",
		price: 2.79,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 25,
		image: "photos/beans.png"
	},
	{
		name: "Corn (Organic)",
		price: 4.60,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 40,
		image: "photos/organiccorn.png"
	},
	{
		name: "Cashew Chocolate Chip Granola Bar",
		price: 1.50,
		dairy: true,
		nuts: true,
		organic: false,
		meat: false,
		gluten: false,
		calories: 95,
		image: "photos/granolabar.png"
	},
	{
		name: "Pretzels",
		price: 2.25,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 120,
		image: "photos/pretzels.png"
	},
	{
		name: "Granola (Organic)",
		price: 7.00,
		dairy: false,
		nuts: true,
		organic: true,
		meat: false,
		gluten: false,
		calories: 150,
		image: "photos/granola.png"
	},
	{
		name: "Chocolate",
		price: 2.50,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 190,
		image: "photos/chocolatebar.png"
	},
	{
		name: "Cheerios",
		price: 4.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 125,
		image: "photos/cheerios.png"
	},
	{
		name: "Marble Cheese",
		price: 3.99,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 120,
		image: "photos/marblecheese.png"
	},
	{
		name: "Cheddar Cheese",
		price: 3.99,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 120,
		image: "photos/cheddar-cheese.png"
	},
	{
		name: "Whole Wheat Bread",
		price: 1.80,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 140,
		image: "photos/bread.png"
	},
	{
		name: "Butter",
		price: 4.00,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 80,
		image: "photos/butter.png"
	},
	{
		name: "Eggs (Organic)",
		price: 6.00,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 75,
		image: "photos/eggs.jpg"
	},
	{
		name: "Eggs",
		price: 5.00,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 75,
		image: "photos/eggs.jpg"
	},
	{
		name: "Blueberry Jam",
		price: 2.95,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 50,
		image: "photos/jam.png"
	},
	{
		name: "Bananas (Organic)",
		price: 1.45,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 80,
		image: "photos/bananas.png"
	},
	{
		name: "Bananas",
		price: 1.15,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 80,
		image: "photos/bananas.png"
	},
	{
		name: "Strawberries (Organic)",
		price: 1.15,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 60,
		image: "photos/strawberries-package.jpg"
	},
	{
		name: "Pecan Pie",
		price: 12.00,
		dairy: false,
		nuts: true,
		organic: false,
		meat: false,
		gluten: true,
		calories: 250,
		image: "photos/pie.png"
	},
	{
		name: "Baby Carrots (Organic)",
		price: 2.50,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/carrots.png"
	},
	{
		name: "Baby Carrots",
		price: 2.20,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/carrots.png"
	},
	{
		name: "Hummus",
		price: 3.05,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 70,
		image: "photos/hummus.png"
	},
	{
		name: "Chickpeas",
		price: 2.80,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 150,
		image: "photos/chickpeas.png"
	},
	{
		name: "Yogurt",
		price: 4.50,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 170,
		image: "photos/yogurt.png"
	},
	{
		name: "Tortillas (Organic)",
		price: 5.15,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: true,
		calories: 130,
		image: "photos/orgtortilla.png"
	},
	{
		name: "Tortillas",
		price: 4.15,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 130,
		image: "photos/tortillas.png"
	},
	{
		name: "Lactose-free Yogurt",
		price: 4.90,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 160,
		image: "photos/dfyogurt.webp"
	},
	{
		name: "Oreos",
		price: 2.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 130,
		image: "photos/oreos.png"
	},
	{
		name: "Chocolate Chip Cookies",
		price: 3.39,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 150,
		image: "photos/chocchipcookies.png"
	},
	{
		name: "Roast Chicken",
		price: 10.50,
		dairy: false,
		nuts: false,
		organic: false,
		meat: true,
		gluten: false,
		calories: 100,
		image: "photos/roastchicken.png"
	},
	{
		name: "Crackers",
		price: 2.25,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 90,
		image: "photos/crackers.png"
	},
	{
		name: "Marshmallows",
		price: 3.05,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 80,
		image: "photos/marshmallows.png"
	},
	{
		name: "Lemonade",
		price: 3.55,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 100,
		image: "photos/lemonade.jpg"
	},
	{
		name: "Rice",
		price: 3.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 170,
		image: "photos/rice.png"
	},
	{
		name: "Spaghetti",
		price: 2.49,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 300,
		image: "photos/spaghetti.png"
	},
	{
		name: "Penne",
		price: 2.49,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 300,
		image: "photos/penne.png"
	},
	{
		name: "Chicken",
		price: 9.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: true,
		gluten: false,
		calories: 100,
		image: "photos/chicken.jpg"
	},
	{
		name: "Teriyaki Sauce",
		price: 4.89,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 90,
		image: "photos/teriyaki.png"
	},
	{
		name: "Potatoes",
		price: 3.79,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 110,
		image: "photos/potatoes.png"
	},
	{
		name: "Steak Seasoning",
		price: 2.00,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 5,
		image: "photos/steak-spice.png"
	},
	{
		name: "Olive Oil",
		price: 7.00,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 100,
		image: "photos/evoo.png"
	},
	{
		name: "Lettuce",
		price: 2.10,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 10,
		image: "photos/lettuce.png"
	},
	{
		name: "Caesar Dressing",
		price: 3.35,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 60,
		image: "photos/caesar.png"
	},
	{
		name: "Bacon",
		price: 4.65,
		dairy: false,
		nuts: false,
		organic: false,
		meat: true,
		gluten: false,
		calories: 180,
		image: "photos/bacon-item.png"
	},
	{
		name: "Croutons",
		price: 2.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		calories: 90,
		image: "photos/croutons.png"
	},
	{
		name: "Gluten-free Crackers",
		price: 4.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 110,
		image: "photos/gf-crackers.png"
	},
	{
		name: "Almond Milk",
		price: 5.99,
		dairy: false,
		nuts: true,
		organic: false,
		meat: false,
		gluten: false,
		calories: 63,
		image: "photos/almondmilk.png"
	},{
		name: "Salmon",
		price: 8.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 100,
		image: "photos/salmon.jpg"
	},
	{
		name: "Salmon (Organic)",
		price: 9.99,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 100,
		image: "photos/salmon.jpg"
	},
	{
		name: "Beyond Meat Burger",
		price: 7.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 140,
		image: "photos/beyondmeat.png"
	},
	{
		name: "Gluten-free Buns",
		price: 4.09,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 160,
		image: "photos/gf-buns.png"
	},
	{
		name: "Chocolate Ice Cream",
		price: 4.79,
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 210,
		image: "photos/choc-icecream.png"
	},
	{
		name: "Dairy-free Vanilla Ice Cream",
		price: 5.89,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 200,
		image: "photos/df-icecream.webp"
	},
	{
		name: "Dairy-free Mozzarella",
		price: 5.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 140,
		image: "photos/df-mozzarella.png"
	},
	{
		name: "Tomato Sauce",
		price: 2.59,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 50,
		image: "photos/tomato-sauce.png"
	},
	{
		name: "Salt",
		price: 2.29,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 0,
		image: "photos/salt.png"
	},
	{
		name: "Pepper",
		price: 2.29,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 0,
		image: "photos/pepper.png"
	},
	{
		name: "Bell Peppers (Organic)",
		price: 3.69,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/peppers.png"
	},
	{
		name: "Mushrooms (Organic)",
		price: 2.99,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/mushroom.png"
	},
	{
		name: "Garlic (Organic)",
		price: 1.50,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 10,
		image: "photos/garlic.png"
	},
	{
		name: "Avocado Oil",
		price: 11.99,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 120,
		image: "photos/avocado-oil.png"
	},
	{
		name: "Lemon (Organic)",
		price: 1.99,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 5,
		image: "photos/lemon.png"
	},
	{
		name: "Asparagus (Organic)",
		price: 4.99,
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/asparagus.png"
	},
	{
		name: "Asparagus",
		price: 3.99,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 30,
		image: "photos/asparagus.png"
	},
	{
		name: "Ketchup",
		price: 4.29,
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		calories: 60,
		image: "photos/ketchup.png"
	},

]

// Array of products
var recipes = [
	{
		name: "Chicken Stir Fry",
		ingredients: ["Chicken", "Broccoli", "Rice", "Teriyaki Sauce"],
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		image: "photos/stirfry.png"
	},
	{
		name: "Caesar Salad",
		ingredients: ["Lettuce", "Caesar Dressing", "Bacon", "Croutons"],
		dairy: true,
		nuts: false,
		organic: false,
		meat: true,
		gluten: true,
		image: "photos/caesar-salad.png"
	},
	{
		name: "Steak and Potatoes",
		ingredients: ["Steak", "Potatoes", "Steak Seasoning", "Olive Oil"],
		dairy: false,
		nuts: false,
		organic: false,
		meat: true,
		gluten: false,
		image: "photos/steak-potatoes.png"
	},
	{
		name: "Veggie Omelet",
		ingredients: ["Eggs (Organic)", "Bell Peppers (Organic)", "Mushrooms (Organic)"],
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		image: "photos/omelet.png"
	},
	{
		name: "Spaghetti with Tomato Sauce",
		ingredients: ["Spaghetti", "Tomato Sauce"],
		dairy: false,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		image: "photos/spaghetti-plate.png"
	},
	{
		name: "Grilled Cheese Sandwich",
		ingredients: ["Whole Wheat Bread", "Butter", "Cheddar Cheese"],
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: true,
		image: "photos/grilled-cheese.png"
	},
	{
		name: "Lemon Garlic Salmon with Asparagus",
		ingredients: ["Asparagus (Organic)", "Salmon (Organic)", "Avocado Oil", "Lemon (Organic)", "Garlic (Organic)"],
		dairy: false,
		nuts: false,
		organic: true,
		meat: false,
		gluten: false,
		image: "photos/salmon-meal.png"
	},
	{
		name: "Hamburger",
		ingredients: ["Gluten-free Buns", "Beyond Meat Burger", "Lettuce", "Marble Cheese", "Ketchup"],
		dairy: true,
		nuts: false,
		organic: false,
		meat: false,
		gluten: false,
		image: "photos/burger.png"
	},


]

var miscProds = [
	{
		name: "Toilet Paper",
		price: 4.00,
		image: "photos/toiletpaper.png"
	},
	{
		name: "Shampoo",
		price: 6.25,
		image: "photos/shampoo.png"
	},
	{
		name: "Conditioner",
		price: 6.50,
		image: "photos/conditioner.png"
	},
	{
		name: "Frying Pan",
		price: 25.99,
		image: "photos/fryingpan.png"
	},
	{
		name: "Spatula",
		price: 3.49,
		image: "photos/spatula.png"
	},
	{
		name: "Hand Soap",
		price: 2.49,
		image: "photos/handsoap.png"
	},
	{
		name: "Dish Soap",
		price: 2.69,
		image: "photos/dishsoap.png"
	},
	{
		name: "Bandaids",
		price: 4.19,
		image: "photos/bandaids.webp"
	},
	{
		name: "Mixing Bowl",
		price: 15.99,
		image: "photos/mixingbowl.png"
	},
	{
		name: "Sponge",
		price: 0.89,
		image: "photos/sponge.png"
	},
	{
		name: "Dish Towel",
		price: 3.99,
		image: "photos/towel.png"
	},
	{
		name: "Moisturizer",
		price: 7.00,
		image: "photos/moisturizer.png"
	},
	{
		name: "Hand Sanitizer",
		price: 3.99,
		image: "photos/purell.png"
	},
]

// Reduced array of products to create personalize list based on customer preferences
function personalizeProducts(products){
	let personal_prods = [];

	// get checkbox elements
	var nutFree = document.getElementById("nut-free");
	var dairyFree = document.getElementById("lactose-free");
	var glutenFree = document.getElementById("gluten-free");
	var vegetarian = document.getElementById("vegetarian");
	var organic = document.getElementById("organic");

	var restrictions = [];
	if (nutFree.checked == true){
		restrictions.push("nuts");
	}
	if (dairyFree.checked == true){
		restrictions.push("dairy");
	}
	if (glutenFree.checked == true){
		restrictions.push("gluten");
	}
	if (vegetarian.checked == true){
		restrictions.push("vegetarian");
	}
	if (organic.checked==true){
		restrictions.push("organic");
	}

	for (let i=0; i<products.length; i++){
			let addProd = {
				name: products[i].name,
				price: products[i].price,
				image: products[i].image,
				calories: products[i].calories
			}

		if (restrictions.includes("organic")){
			if (products[i].organic==true){
				if (( !restrictions.includes("nuts") || products[i].nuts==false )
					&& ( !restrictions.includes("dairy") || products[i].dairy==false )
					&& ( !restrictions.includes("gluten") || products[i].gluten==false )
					&& ( !restrictions.includes("vegetarian") || products[i].meat==false ))
				{
					personal_prods.push(addProd);
				}
			}
		}else{
			if (products[i].organic==false){
				if (( !restrictions.includes("nuts") || products[i].nuts==false )
					&& ( !restrictions.includes("dairy") || products[i].dairy==false )
					&& ( !restrictions.includes("gluten") || products[i].gluten==false )
					&& ( !restrictions.includes("vegetarian") || products[i].meat==false ))
				{
					personal_prods.push(addProd);
				}
			}
		}	
	}

	// sort from lowest price to highest price
	personal_prods.sort(function(a, b){
		return a.price-b.price;
	});

	return personal_prods;
}

// Calculate total price of shopping cart, given a list of products
function calculatePrice(products){
	price = 0;
	for (let i=0; i<prods.length; i++){
		if (products.indexOf(prods[i].name) > -1){
			price += prods[i].price;
		}
	}
	for (let i=0; i<miscProds.length; i++){
		if (products.indexOf(miscProds[i].name) > -1){
			price += miscProds[i].price;
		}
	}
	return "$"+price.toFixed(2);
}

// personalize list of recipes based on user's preferences
function personalizeRecipes(recipes){
	let personal_recs = [];

	// get checkbox elements
	var nutFree = document.getElementById("nut-free");
	var dairyFree = document.getElementById("lactose-free");
	var glutenFree = document.getElementById("gluten-free");
	var vegetarian = document.getElementById("vegetarian");
	var organic = document.getElementById("organic");

	var restrictions = [];
	if (nutFree.checked == true){
		restrictions.push("nuts");
	}
	if (dairyFree.checked == true){
		restrictions.push("dairy");
	}
	if (glutenFree.checked == true){
		restrictions.push("gluten");
	}
	if (vegetarian.checked == true){
		restrictions.push("vegetarian");
	}
	if (organic.checked==true){
		restrictions.push("organic");
	}

	for (let i=0; i<recipes.length; i++){
			let addRec = {
				name: recipes[i].name,
				ingredients: recipes[i].ingredients,
				image: recipes[i].image,
			}

		if (restrictions.includes("organic")){
			if (recipes[i].organic==true){
				if (( !restrictions.includes("nuts") || recipes[i].nuts==false )
					&& ( !restrictions.includes("dairy") || recipes[i].dairy==false )
					&& ( !restrictions.includes("gluten") || recipes[i].gluten==false )
					&& ( !restrictions.includes("vegetarian") || recipes[i].meat==false ))
				{
					personal_recs.push(addRec);
				}
			}
		}else{
			if (recipes[i].organic==false){
				if (( !restrictions.includes("nuts") || recipes[i].nuts==false )
					&& ( !restrictions.includes("dairy") || recipes[i].dairy==false )
					&& ( !restrictions.includes("gluten") || recipes[i].gluten==false )
					&& ( !restrictions.includes("vegetarian") || recipes[i].meat==false ))
				{
					personal_recs.push(addRec);
				}
			}
		}	
	}

	return personal_recs;
}

