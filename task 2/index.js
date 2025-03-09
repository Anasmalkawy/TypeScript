var products = [
    { name: "Laptop", description: "A powerful laptop", price: 1000 },
    { name: "Phone", description: "A smartphone", price: 500 },
    { name: "Tablet", description: "A compact tablet", price: 300 }
];
function loadProducts() {
    var container = document.getElementById("product-list");
    products.forEach(function (product) {
        container.innerHTML += "<p><strong>".concat(product.name, "</strong>: ").concat(product.description, " - $").concat(product.price, "</p>");
    });
}
console.log(products);
;
function age(person1) {
    if (person1.Age > 18) {
        console.log("adult");
    }
    else {
        console.log("mnior");
    }
    ;
}
var person2 = { Name: "anas", Age: 26 };
var person3 = { Name: "ali", Age: 16 };
age(person2);
age(person3);
;
var data1 = { Name: "anas", subject: ["math", "eng"] };
var data2 = { Name: "ali", subject: ["eng", "arabic"] };
console.log(data1.subject);
console.log(data2.subject);
;
var prod1 = [
    { name: "Dell", price: 1000, quantity: 6 },
    { name: "toshiba", price: 1000, quantity: 4 }
];
for (var key in prod1) {
    if (prod1[key].quantity > 5) {
        prod1[key].price = prod1[key].price - prod1[key].price * 0.15;
        console.log(prod1[key].price);
    }
}
;
var productes = [];
function addProduct() {
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var price = parseFloat(document.getElementById('price').value);
    var newProduct = { name: name, description: description, price: price };
    products.push(newProduct);
    displayProducts();
    document.querySelector('form').reset();
}
function displayProducts() {
    var productList = document.getElementById('productList');
    productList.innerHTML = '';
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        productList.innerHTML += "\n          <div class=\"product-card\">\n              <h3>".concat(product.name, "</h3>\n              <p>").concat(product.description, "</p>\n              <p>Price: $").concat(product.price, "</p>\n          </div>\n      ");
    }
}
