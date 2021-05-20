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
let curr_symbol = document.getElementById("curr_symbol");
let amount = document.getElementById("amount");
let total = 0;
let usd_total = 0;
let euro_total = 0;
let msg;
let final_budget;
let final_currency;
const confirmButton = document.getElementsByTagName("button");
const checkboxes = document. querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        msg = "Hola! Quiero confirmar mi presupuesto de diseño personalizado. Estos son los diseños que necesito: ";
        total = 0;
        currency.value="pesoArg";
        curr_symbol.innerText = "$";                
        if (invitation.checked){
            total += invPrice;
            msg += "invitación/";                                            
        } 
        if (tag.checked) {
            total += tagPrice;
            msg += "tag cierrabolsita/";                        
        }
        if (card.checked){
            total += cardPrice;
            msg +="tarjeta o estampita/";

        }
        if (pennants.checked){
            total += pennPrice;
            msg +="banderines/";
        }
        if (banner.checked){
            total += bannPrice;
            msg +="cartel de Bienvenida/";
        }
        if (popcornBox.checked){
            total += popPrice;
            msg +="pochoclera/";
        }
        if (milkBox. checked){
            total += milkPrice;
            msg +="milkbox/";
        }
        if (roundLabels.checked){
            total+= roundPrice;
            msg +="círculos multiuso/";
        }
        if (candyLabels.checked){
            total += candyPrice;
            msg +="envoltorios para candy bar/";
        }
        if (bottleLabels.checked){
            total += bottlePrice;
            msg +="fajas para botellas/";
        }         
         amount.innerHTML=total;
         console.log(msg); 
    })
})
currency.addEventListener('change', () => {
    if(currency.value === "pesoArg"){
        total = total;
        amount.innerHTML = total;
        final_budget = total;
        final_currency = "pesos";
    }
    if(currency.value === "dolar"){
        usd_total = Math.round(total/68);
        amount.innerHTML = usd_total;
        final_budget = usd_total;
        final_currency = "dólares";
        curr_symbol.innerText = "$";
    }
    if (currency.value === "euro"){
        euro_total = Math.round(total/75);
        amount.innerHTML = euro_total;
        final_budget = euro_total;
        final_currency = "euros"; 
        curr_symbol.innerText = "€";       
    }
})

confirmButton[0].addEventListener('click', (e) => {
    e.preventDefault();
    let delivery_date = date.value;
    let theme = partyTheme.value;
    console.log(msg);    
    window.open(`https://wa.me/5493574437945?text=${msg}%20El%20precio%20es%20${final_budget}%20${final_currency}%20y%20la%20temática%20que%20elegí%20es%20${theme}.%20Necesito%20los%20diseños%20para%20esta%20fecha:%20${delivery_date}`, '_blank');
});

