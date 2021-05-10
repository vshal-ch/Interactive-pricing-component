let price= document.querySelector('.price-label');
let priceRange= document.querySelector('#price-bar');
let checkBox=document.querySelector('#check');

priceRange.value=16.00;

priceValue=parseFloat(parseFloat(priceRange.value).toFixed(2))

if(checkBox.checked==true){
    price.innerHTML=`<span class="number">$ ${(priceRange.value)*10}</span> / year`;
}
else if(checkBox.checked==false){
    price.innerHTML=`<span class="number">$ ${priceRange.value}</span> / month`;
}

let value = (priceRange.value-priceRange.min)/(priceRange.max-priceRange.min)*100;
priceRange.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)';


priceRange.addEventListener('input',() => {
    let value = (priceRange.value-priceRange.min)/(priceRange.max-priceRange.min)*100
    priceRange.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)';
    price.innerHTML=`<span class="number">$ ${(priceRange.value)*1}</span> / month`;
    if(checkBox.checked==true){
        price.innerHTML=`<span class="number">$ ${(priceRange.value)*10}</span> / year`;
    }
});

checkBox.addEventListener('input',() => {
    if(checkBox.checked==true){
        price.innerHTML=`<span class="number">$ ${(priceRange.value)*10}</span> / year`;
    }
    else if(checkBox.checked==false){
        price.innerHTML=`<span class="number">$ ${(priceRange.value)*1}</span> / month`;
    }
})