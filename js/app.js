document.addEventListener("DOMContentLoaded", function() {
//moje zdefiniowane zmenne
  var addItem = document.querySelector(".btn");
  var newTab = document.querySelector(".adding")
  console.log(newTab)
  
   var makeText = document.createTextNode("example");
  var newTr = document.createElement("tr");
    console.log(newTr);
  var table = document.querySelector("table"); 
    console.log(table)
    var toPay = document.querySelector(".toPay")
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML="Skreśl przedmiot";
    
    var quantity=document.querySelector(".quantity");
    console.log(quantity)
    var price = document.querySelector(".price");
    console.log(price)
    var product = document.querySelector(".product")
    console.log(product)
    //var suma = document.querySelector()
    //tutaj musisz pomnożyć ilość razy cenę produktu
    var howMuch = document.querySelector(".howMuch")
   console.log(howMuch)

 function addProduct() {
    var howMuch = document.querySelector(".howMuch") 
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML="Skreśl przedmiot";
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.appendChild(removeBtn); 
    cell2.innerHTML = product.value
    cell3.innerHTML = parseFloat(quantity.value);
    cell4.innerHTML = parseFloat(price.value);
    var onePro = parseFloat(quantity.value)*parseFloat(price.value); 
    cell5.innerHTML = onePro;
     
      //jak dodać do siebie wartość wszystkich cell5 aby otrzymać sumę
    for (var i = 0; i<cell5.length; i++) {
        document.querySelector("td").lastChild = cell5[i];
    }
 }
     
     
        
    /*function findTotal(){
    var arr = document.querySelector("td").lastChild;
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if (arr[i].value){
            tot += arr[i].value;
            howMuch.innerHTML = tot*/   
      
 
    
/*function findTotal(){
    var arr = document.querySelector("td").lastChild;
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if (arr[i].value){
            tot += arr[i].value;
        }
    }*/
    //get total
    
    
   addItem.addEventListener("click", addProduct); 
    
    function removeProduct () {
     var removeBtn = document.createElement("button");
     removeBtn.innerHTML="Skreśl przedmiot";
     var myRow = document.querySelector("tr");
        myRow.strike();
    }
    
    
                            
    removeBtn.addEventListener("click", removeProduct)
    
     
    
      //var przekreslonyPrice = document.createElement('strike');
      //przekreslonyPrice.innerHTML = cell2;
      //cell4.innerHTML = przekreslonyPrice;
   
  
   // function();
 /*var makeP = document.createElement("p")    
  var para = document.querySelector("p");
  var proba = document.querySelector(".proba")
  var t = document.createTextNode("Test"); 

  proba.appendChild(makeP);
   makeP.appendChild(t);
   ==============================================
   Tu masz przykład jak działa appendChild*/
    
 
    

});
