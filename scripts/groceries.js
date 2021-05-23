// Array of products
var prods = [
	{
		name: "Apple",
		price: 0.99,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/apple.png"
	},
	{
		name: "Apple (Organic)",
		price: 1.79,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/organicapple.png"
	},
	{
		name: "Peanut Butter (Organic)",
		price: 5.75,
		dairy: false,
		nuts: true,
		organic: true,
		image: "photos/pb.png"
	},
	{
		name: "Milk",
		price: 4.00,
		dairy: true,
		nuts: false,
		organic: false,
		image: "photos/milk.png"
	},
	{
		name: "Bagels",
		price: 3.50,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/bagels.png"
	},
	{
		name: "Cream Cheese",
		price: 2.99,
		dairy: true,
		nuts: false,
		organic: false,
		image: "photos/creamcheese.png"
	},
	{
		name: "Almonds",
		price: 8.15,
		dairy: false,
		nuts: true,
		organic: false,
		image: "photos/almonds.png"
	},
	{
		name: "Steak (Organic)",
		price: 11.25,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/steak.png"
	},
	{
		name: "Broccoli (Organic)",
		price: 3.10,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/broccoli.png"
	},
	{
		name: "Grean Beans",
		price: 2.79,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/beans.png"
	},
	{
		name: "Corn (Organic)",
		price: 4.60,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/organiccorn.png"
	},
	{
		name: "Cashew Chocolate Chip Granola Bar",
		price: 1.50,
		dairy: true,
		nuts: true,
		organic: false,
		image: "photos/granolabar.png"
	},
	{
		name: "Pretzels",
		price: 2.25,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/pretzels.png"
	},
	{
		name: "Granola (Organic)",
		price: 7.00,
		dairy: false,
		nuts: true,
		organic: true,
		image: "photos/granola.png"
	},
	{
		name: "Chocolate",
		price: 2.50,
		dairy: true,
		nuts: false,
		organic: false,
		image: "photos/chocolatebar.png"
	},
	{
		name: "Cheerios",
		price: 4.99,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/cheerios.png"
	},
	{
		name: "Marble Cheese",
		price: 3.99,
		dairy: true,
		nuts: false,
		organic: false,
		image: "photos/marblecheese.png"
	},
	{
		name: "Whole Wheat Bread",
		price: 1.80,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/bread.png"
	},
	{
		name: "Butter",
		price: 4.00,
		dairy: true,
		nuts: false,
		organic: false,
		image: "photos/butter.png"
	},
	{
		name: "Eggs (Organic)",
		price: 5.00,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/eggs.jpg"
	},
	{
		name: "Blueberry Jam",
		price: 2.95,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/jam.png"
	},
	{
		name: "Bananas (Organic)",
		price: 1.15,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/bananas.png"
	},
	{
		name: "Strawberries (Organic)",
		price: 1.15,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/strawberries-package.jpg"
	},
	{
		name: "Pecan Pie",
		price: 12.00,
		dairy: false,
		nuts: true,
		organic: false,
		image: "photos/pie.png"
	},
	{
		name: "Baby Carrots",
		price: 2.00,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/carrots.png"
	},
	{
		name: "Hummus",
		price: 3.05,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/hummus.png"
	},
	{
		name: "Roast Chicken",
		price: 10.50,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/roastchicken.png"
	},
	{
		name: "Crackers",
		price: 2.25,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/crackers.png"
	},
	{
		name: "Marshmallows",
		price: 3.05,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/marshmallows.png"
	},
	{
		name: "Lemonade",
		price: 3.55,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/lemonade.jpg"
	},
	{
		name: "Rice (Organic)",
		price: 3.99,
		dairy: false,
		nuts: false,
		organic: true,
		image: "photos/rice.png"
	},
	{
		name: "Spaghetti",
		price: 2.49,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/spaghetti.png"
	},
	{
		name: "Penne",
		price: 2.49,
		dairy: false,
		nuts: false,
		organic: false,
		image: "photos/penne.png"
	},

]

// Reduced array of products to create personalize list based on customer preferences
 function personalizeProducts(products, restriction){
	let personal_prods = [];
	var organic = document.getElementById('organic');
	var notOrganic = document.getElementById('non-organic');
	for (let i=0; i<products.length; i++){
		let addProd = {
				name: products[i].name,
				price: products[i].price,
				image: products[i].image
			}

		// filter products based on restriction and oragnic vs non-organic
		if (notOrganic.checked){ //non-organic
			if (products[i].organic==false){
				if ((restriction=="Lactose-free") && (products[i].dairy==false)){
					personal_prods.push(addProd);
				}
				else if ((restriction=="Nut-free") && (products[i].nuts==false)){
					personal_prods.push(addProd);
				}
				else if ((restriction=="Lactose/nut-free") && (products[i].nuts==false) && (products[i].dairy==false)){
					personal_prods.push(addProd);
				}
				else if (restriction=="None"){
					personal_prods.push(addProd);
				}
			}	
		}else if(organic.checked){ //organic
			if (products[i].organic==true){
				if ((restriction=="Lactose-free") && (products[i].dairy==false)){
					personal_prods.push(addProd);
				}
				else if ((restriction=="Nut-free") && (products[i].nuts==false)){
					personal_prods.push(addProd);
				}
				else if ((restriction=="Lactose/nut-free") && (products[i].nuts==false) && (products[i].dairy==false)){
					personal_prods.push(addProd);
				}
				else if (restriction=="None"){
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

// // Calculate total price of shopping cart, given a list of products
function calculatePrice(products){
	price = 0;
	for (let i=0; i<prods.length; i++){
		if (products.indexOf(prods[i].name) > -1){
			price += prods[i].price;
		}
	}
	return "$"+price.toFixed(2);
}

