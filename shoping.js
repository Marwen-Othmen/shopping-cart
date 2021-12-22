// alert(`this is marwen`);

let TOT=document.getElementById("total");
let SOMT=document.getElementById("prix-total");
let SOM =Array.from(document.getElementsByClassName("somme"));
let PRI = Array.from(document.getElementsByClassName("price"));
let produits = Array.from(document.getElementsByClassName("product"));
let btnsPlus = Array.from(document.getElementsByClassName("btn-plus"));
let btnsMinus = Array.from(document.getElementsByClassName("btn-minus"));

console.log(btnsPlus);
console.log(btnsMinus);

for(let i=0; i<btnsPlus.length; i++){
  btnsPlus[i].addEventListener("click", function () {
    // plus.nextElementSibling.innerHTML = Number(plus.nextElementSibling.innerHTML) +1
    btnsPlus[i].nextElementSibling.innerHTML++;
      SOM[i].innerHTML=PRI[i].innerHTML*btnsPlus[i].nextElementSibling.innerHTML;
    SOMTT();
  
  })
}

for(let i=0; i<btnsPlus.length; i++){
  btnsMinus[i].addEventListener("click", function () {
    if (btnsMinus[i].previousElementSibling.innerHTML > 0) {
      btnsMinus[i].previousElementSibling.innerHTML =
        Number(btnsMinus[i].previousElementSibling.innerHTML) - 1;
        SOM[i].innerHTML=PRI[i].innerHTML*btnsMinus[i].previousElementSibling.innerHTML;
        SOMTT();
   
    }
  });
}
function SOMTT(){
  let SOM =Array.from(document.getElementsByClassName("somme"));
let PRI = Array.from(document.getElementsByClassName("price"));
let SOT=0
  for(let i=0;i<SOM.length;i++){
    SOT+=Number(SOM[i].innerHTML)

    // SOMT+=PRI[i].innerHTML*btnsPlus[i].nextElementSibling.innerHTML
  }
  SOMT.innerHTML=SOT
  TOT.innerHTML= SOT+5
}



let hearts = document.getElementsByClassName('fa-heart')

console.log(hearts)


for (let   heart of hearts) {
  heart.addEventListener('click', function(){
    heart.classList.toggle("red");
  })
}

let remove = document.getElementsByClassName("fa-trash")
console.log(remove)
for (let i=0;i<remove.length;i++){
  remove[i].addEventListener("click", function () {
produits[i].remove()

  })
}
let removeall = document.getElementById('remove-all')
let RMOV = document.getElementsByClassName("fa-backspace")[0]
RMOV.addEventListener('click',function(x){
  removeall.remove()
  RMOV.remove()
  SOMTT()

})
console.log(RMOV)






