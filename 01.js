const form =document.querySelector('form')


form.addEventListener('submit',function(e){
    e.preventDefault();
   const height= parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
    const result =document.querySelector('#results');
    const health=document.querySelector('#weight-guide');

   if(  height<0 || height==='' || isNaN(height)){
    result.innerHTML =`Please enter a valid height ${height}`;
   }
   else if(weight<0 || weight==='' || isNaN(weight)){
    result.innerHTML=`Please enter a valid weight ${weight}`;
   }
   else{
    const bmi =(weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML= `<span> ${bmi}</span>`;
   
   
   if(bmi<18){
        health.innerHTML=`bhai kuch kha le 😂😂😂 `;
     }
     else if(bmi<25){
        health.innerHTML=`yee boy , cool! 😍😍😍`;
     }
    else{
        health.innerHTML=`Bhai km khaya kr! ja Running kr 🏃‍♂️🏃‍♂️`;
    } 
 }
});

