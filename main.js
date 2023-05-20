var productName = document.getElementById ('ProductName');
var productPrice = document.getElementById ('ProductPrice');
var productCategory = document.getElementById ('ProductCategory');
var productDesc = document.getElementById ('ProductDesc');

var ProductContainer;
if (localStorage.getItem('myProduct') != null )
{
  ProductContainer =  JSON.parse(localStorage.getItem('myProduct'));
  displayProduct(ProductContainer);
}
else
{
  ProductContainer = []; 
}
function addProduct()
{
  var product={
      name : productName.value,
      price : productPrice.value,
      category : productCategory.value,
      desc : productDesc.value
  }
  ProductContainer.push(product);
  localStorage.setItem('myProduct' , JSON.stringify(ProductContainer));
  clear();
  displayProduct(ProductContainer);

  console.log(product);
}

function clear ()
{
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDesc.value = "";
}
function displayProduct(productList)
{
  var cartoona = ``;
  for(var i = 0 ; i < productList.length ; i++ )
  {
    cartoona += `<tr>
     <td>${i}</td>
    <td>${productList[i].name}</td>
    <td>${productList[i].price}</td>
    <td>${productList[i].category}</td>
    <td>${productList[i].desc}</td>
    <td><button onclick ="updateProduct(${i});" class=" btn btn-outline-warning">Update</button></td>  
    <td><button onclick = "deleteProduct(${i});" class=" btn btn-outline-danger">Delete</button></td>  
    </tr>
    `;
  }
document.getElementById('productInfo').innerHTML = cartoona;
}


function deleteProduct(indexOfProduct)
{
  ProductContainer.splice(indexOfProduct,1);
  localStorage.setItem('myProduct',JSON.stringify(ProductContainer));
  displayProduct(ProductContainer);

}


function updateProduct (indexOfProduct)
{
  productName.value = ProductContainer[indexOfProduct].name;
  productPrice.value = ProductContainer[indexOfProduct].price;
  productCategory.value = ProductContainer[indexOfProduct].category;
  productDesc.value = ProductContainer[indexOfProduct].desc;

 document.getElementById('mainbtn').innerHTML = 'Update';
}
