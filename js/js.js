
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let totale = document.getElementById('totale');
let count = document.getElementById('count');
let catagory = document.getElementById('catagory');
let submit = document.getElementById('submit');
//console.log(title, price, taxes, ads, discount, totale, count, catagory, submit);
//get totale
let reselt;
function getTotale()
{
    console.log('done');
  //  totale.style.color = '#000';
    if (price.value != '') {
       
         reselt = (+price.value + +taxes.value + +ads.value) - +discount.value ;
         console.log(reselt);
         totale.innerHTML = +reselt;
        totale.style.background = '#040';
    }
    else {

        totale.innerHTML = '';
        totale.style.background = '#a00d02';
    }
}
// create product
let dataPro;
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
}
else {
    dataPro = [];
}
submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        totale: totale.innerHTML,
        count: count.value,
          catagory: catagory.value,
    }
    dataPro.push(newPro)
    //save localstoreg
    localStorage.setItem('product' ,     JSON.stringify(dataPro)      );
    console.log(dataPro);
    clearData();
    showData();
}
//clear inpute
function clearData() {
     title.value='';
     price.value='';
     taxes.value='';
     ads.value='';
     discount.value='';
     totale.innerHTML = '' ;
     count.value='';
     catagory.value = '';
}
//read
function showData() {
    let table = '';
    for (let i = 1; i < dataPro.length; i++) {
      
        table += `
<tr> 
    <td>${i}</td>
     <td>${dataPro[i].title}</td>
     <td>${dataPro[i].price}</td>
     <td>${dataPro[i].taxes}</td> 
     <td>${dataPro[i].ads}</td>
     <td>${dataPro[i].discount}</td>
     <td>${dataPro[i].count}</td>
     <td>${dataPro[i].catagory}</td> 
     <td>${dataPro[i].totale*dataPro[i].count}</td>
      <td><button id="update">update</button></td> 
      <td><button onclick ="deleteData(${i}  )" id="delete">delte</button></td>
</tr>
`
                  
                  
           
                    
                    
        
        
    }
   document.getElementById('tbody').innerHTML = table;
}
showData();
//count
//delete
function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product =  JSON.stringify(dataPro);
console.log(i);
showData();
}
//  update
//search
//clean data
//:"''><,.~!@#$%^&*^^PP"