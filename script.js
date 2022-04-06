const selector = (el)=>document.querySelector(el);
const selectorAll = (el)=>document.querySelectorAll(el);

pizzaJson.map((item, index)=>{
   let pizzaItem = selector('.models .pizza-item').cloneNode(true);
   pizzaItem.setAttribute('data-key', index);
   pizzaItem.querySelector('.pizza-item--img img').src = item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}` ;
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
   pizzaItem.querySelector('.pizza-item--link').addEventListener('click', (e)=>{
    e.preventDefault(); 

      let key =e.target.closest('.pizza-item').getAttribute('data-key');
         
      selector('.pizzaBig img').src = pizzaJson[key].img;
      selector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
      selector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
      selector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`




     selector('.pizzaWindowArea').style.opacity = 0;
     selector('.pizzaWindowArea').style.display = 'flex';
     setTimeout(()=>{
         selector('.pizzaWindowArea').style.opacity = 1;
     }, 200);
    
   });

   selector('.pizza-area').append( pizzaItem);
});

