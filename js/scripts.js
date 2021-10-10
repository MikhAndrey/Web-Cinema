const schemeSvg = document.querySelector(".scheme-svg");
let cost = 800;
let totalPrice=0;
const totalPriceTag=document.querySelector(".price-total");
schemeSvg.addEventListener('click',(event)=>{
if (!event.target.classList.contains('booked')){
    event.target.classList.toggle("active")
    totalPrice=cost*schemeSvg.querySelectorAll(".active").length;
    totalPriceTag.textContent=totalPrice;
}
});