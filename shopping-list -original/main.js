var likeBtn = document.querySelectorAll(".like");
var price = document.querySelectorAll(".price");
var quant = document.querySelectorAll(".Quant");
var priceIphone = document.querySelector("#p1").innerHTML;
// var iconBtn = document.querySelectorAll('.fa')
// likeBtn.forEach((item,i)=>{
// item.addEventListener("click", function()
// {
//     if(iconBtn[i].style.color === "red"){
//         iconBtn[i].style.color = "black";
//     }
// else{
//     iconBtn[i].style.color ="red";
// }
// })
// });

for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", function () {
    if (likeBtn[i].style.color === "red") {
      likeBtn[i].style.color = "black";
    } else {
      likeBtn[i].style.color = "red";
    }
  });
}

// delete

var del = document.querySelectorAll(".delete");
var items = document.querySelectorAll(".Item");

// items.forEach((item,i)=>{
//     del[i].addEventListener("click", function()
//     {
//     item.remove();
//     totale();
//     })
//     });
for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
    items[i].remove();
    totale();
  });
}

//     // quantite
var plus = document.querySelectorAll(".Quant");
var plus_bt = document.querySelectorAll(".plus-btn");
plus.forEach((Quant, i) => {
  plus_bt[i].addEventListener("click", function () {
    plus[i].value++;
    price[i].innerHTML = priceIphone * quant[i].value;
    totale();
  });
});
//     // console.log( prix.innerHTML);

//         // document.getElementById("p2").innerHTML = 176.80*plus[i].value;
//         // document.getElementById("p3").innerHTML = 249.00*plus[i].value;

var plus = document.querySelectorAll(".Quant");
var minus_bt = document.querySelectorAll(".minus-btn");
plus.forEach((Quant, i) => {
  minus_bt[i].addEventListener("click", function () {
    plus[i].value--;
    totale();
  });
});

// totale_price

function totale() {
  var items = document.querySelectorAll(".Item");
  var final = document.getElementById("finalPrice");
  let s = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    s =
      s +
      item.querySelector(".price").innerText *
        item.querySelector(".Quant").value;
  }
  return (final.value = s);
}

// for (let i = 1; i <= 3; i++) {
//     let prix = document.getElementById("p" + i);
//     console.log(prix.value);

//     }
// var items = document.getElementsByClassName("Item");
// function total(){
//     let s= 0;
//     items.forEachfor((items,i)=>{
//         s =
//         s+
//         items[i].querySelector(".price").innerText *
//         items[i].querySelector(".Quant").value;
//     })
//     return (s);
// }

// prix

// var prix = document.querySelectorAll("#p1");
// var valu = document.querySelectorAll(".Quant");
// prix.forEach((item,i)=>{
//     function myfun(){
//         return valu*prix;
//     }
// });
// Loop through elements with IDs starting with "item"

// let t = 0;
// // Loop through elements with IDs starting with "item"
// for (let i = 1; i <= 3; i++) {
// let element = document.getElementById("p" + i);
// t += parseInt(element.innerHTML);
// }

// console.log("Total: " + t);
