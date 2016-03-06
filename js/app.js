document.addEventListener("DOMContentLoaded", function() {
    
//moje zdefiniowane zmenne
  var addItem = document.querySelector("#addBtn");
  var newTab = document.querySelector(".adding");
  var table = document.querySelector("table"); 
  var strikeTr = document.getElementsByClassName("strike")
  var quantityInput =document.querySelector("#quantity"); 
  var priceInput = document.querySelector("#price");
  var productInput = document.querySelector("#product")
  var howMuch = document.querySelector("#howMuch")


 function addProduct() {
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML="Skreśl przedmiot";
   
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
     
    cell5.classList.add("altogether");
     //zawartość mojej tabeli
    cell1.appendChild(removeBtn); 
    cell2.innerHTML = productInput.value
    
    if (quantityInput.value !== "") {
        cell3.innerHTML = parseFloat(quantityInput.value);
    }
    else {    
        alert("Proszę podać ilość produktów");
        cell3.innerHTML = parseFloat("0");
    }
     if (priceInput.value !== "") {
        cell4.innerHTML = parseFloat(priceInput.value);
    }
    else {    
        alert("Proszę podać cenę produktu");
        cell4.innerHTML = parseFloat("0");
    }  
     
     if (quantityInput.value === "" && priceInput.value === "") {
         cell5.innerHTML = parseFloat("0");
     }
     else if (quantityInput.value === "" || priceInput.value === "") {
         cell5.innerHTML = parseFloat("0");
     }
    else {
        cell5.innerHTML = parseFloat(quantity.value)*parseFloat(price.value);
    }
     
     //moj event dla strike:
       removeBtn.addEventListener("click", function(event){
           var rowToDelete = this.parentElement.parentElement;//wiersz jest dziadkiem dla mojego guzika
           var myRow = document.getElementsByTagName("tr");
           rowToDelete.classList.toggle("strike");
           howMuch.innerHTML ="0";
           
     for (var z=0;z<myRow.length;z++) {
        var subRowValue = myRow[z].lastChild.innerHTML;
        if (subRowValue && !myRow[z].classList.contains("strike")) { 
          	howMuch.innerHTML = parseFloat(howMuch.innerHTML)+parseFloat(subRowValue); 
        }
     }
                  
    });
       
     var toPay = document.getElementsByClassName("altogether");
    var suma = 0;
    for (var n=0; n<toPay.length;n++) {
         var suma = suma + parseFloat(toPay[n].innerHTML);
            howMuch.innerHTML = parseFloat(suma);
        }
        //jeśli row ma klasę strike to należy odjąć jego cell5 od całej sumy
     
    };

     addItem.addEventListener("click", addProduct); 
    
    
 
    

});
