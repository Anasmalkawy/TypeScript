
const products = [
  { name: "Laptop", description: "A powerful laptop", price: 1000 },
  { name: "Phone", description: "A smartphone", price: 500 },
  { name: "Tablet", description: "A compact tablet", price: 300 }
];

function loadProducts() {
  let container:any = document.getElementById("product-list");
      products.forEach(product => {
          container.innerHTML += `<p><strong>${product.name}</strong>: ${product.description} - $${product.price}</p>`;
      });

}
console.log(products);



/////////////////////1111111111111/////////////////////

interface Person{
  Name : string,
  Age: number
};


function age(person1:Person){
  if (person1.Age>18) {
    console.log("adult");
    
  }else{
    console.log("mnior");
  };
}

const person2:Person={Name:"anas",Age:26};
const person3:Person={Name:"ali",Age:16};


age(person2);
age(person3);



//////////////////////2222222///////////////////////


interface techer{
Name : string,
subject : string[]
};


const data1:techer={Name:"anas", subject:["math","eng"]};
const data2:techer={Name:"ali", subject:["eng","arabic"]};


console.log(data1.subject);
console.log(data2.subject);

////////////////3333333333333333///////////////////////////






interface prod {
  name: string;
  price: number;
  quantity: number;
};

let prod1: prod[]=[
  {name: "Dell", price: 1000, quantity: 6 },
  {name: "toshiba", price: 1000, quantity: 4}
];


for (const key in prod1) {
  if (prod1[key].quantity>5) {
    prod1[key].price=prod1[key].price - prod1[key].price*0.15
    console.log(prod1[key].price);
  }
};



///////////////////444444444444///////////////////



interface Product {
  name: string;
  description: string;
  price: number;
}

let productes: Product[] = [];

function addProduct(): void {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const description = (document.getElementById('description') as HTMLTextAreaElement).value;
  const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);


  const newProduct: Product = { name, description, price };
  products.push(newProduct);
  displayProducts();
  (document.querySelector('form') as HTMLFormElement).reset();
}

function displayProducts(): void {
  const productList = document.getElementById('productList') as HTMLDivElement;
  productList.innerHTML = '';
  for (const product of products) {
      productList.innerHTML += `
          <div class="product-card">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>Price: $${product.price}</p>
          </div>
      `;
  }
}