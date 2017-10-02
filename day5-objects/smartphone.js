var currentInventory = [ 
	{name: "HTC", stock: 25},
	{name: "Nokia", stock: 1000}, 
	{name: "Samsung", stock: 50},
	{name: "Sony", stock: 10}, 
	{name: "Apple", stock: 15}
];

var newInventory = [ 
	{name: "LG", stock: 5},
	{name: "Sony", stock: 10}, 
	{name: "Samsung", stock: 5}, 
	{name: "Apple", stock: 15}
];

function updateInventory(currentInventory,newInventory){
	newInventory.forEach(function(productDetail){
		var product = currentInventory.find(function(inventory){
			return inventory.name == productDetail.name;
		});
		if(typeof product == "undefined"){
			console.log(productDetail.name + 'not found in inventory adding it ...')
			currentInventory.push(productDetail);
		}
		else {
			console.log("Updating stock of" + product.name + "by" + productDetail.stock);
			product.stock += productDetail.stock;
		}
	});
	return currentInventory;
}

console.log(updateInventory(currentInventory,newInventory));

