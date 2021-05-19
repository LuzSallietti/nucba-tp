const invitation = document.getElementById("invitation");
let invPrice = 775;
const card = document.getElementById("card");
let cardPrice = 775;
const tag = document.getElementById("tag");
let tagPrice = 250;
const pennants = document.getElementById("pennants");
let pennPrice = 575;
const banner = document.getElementById("banner");
let bannPrice = 250;
const popcornBox = document.getElementById("popcornBox");
let popPrice = 250;
const milkBox = document.getElementById("milkBox");
let milkPrice = 250;
const roundLabels = document.getElementById("roundLabels");
let roundPrice = 250;
const candyLabels = document.getElementById("candyLabels");
let candyPrice = 525;
const bottleLabels = document.getElementById("bottleLabels");
let bottlePrice = 250;
const date = document.getElementById("date");
const partyTheme = document.getElementById("partyTheme");
const currency = document.getElementById("currency");
let amount = document.getElementById("amount");
let total = 0;
const confirmButton = document.getElementsByTagName("button");
const checkboxes = document. querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        total = 0;        
        if (invitation.checked){
            total += invPrice;                       
        } 
        if (tag.checked) {
            total += tagPrice;           
        }
        if (card.checked){
            total += cardPrice;
        }
        if (pennants.checked){
            total += pennPrice;
        }
        if (banner.checked){
            total += bannPrice;
        }
        if (popcornBox.checked){
            total += popPrice;
        }
        if (milkBox. checked){
            total += milkPrice;
        }
        if (roundLabels.checked){
            total+= roundPrice;
        }
        if (candyLabels.checked){
            total += candyPrice;
        }
        if (bottleLabels.checked){
            total += bottlePrice;
        }         
         amount.innerHTML=total; 
    })
})

/*invitation.addEventListener('change', () =>{
    if (invitation.checked){
        total = total+ 990;
        console.log(total);
    } else {
        total = total-990;
        console.log(total);
    }
})*/
