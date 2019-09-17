var elm = document.querySelectorAll('img');
var inc = document.querySelector('#inc');
elm.forEach(function(img){
  img.addEventListener('click',function () {
    inc.innerHTML = parseInt(inc.innerText)+1;
    })
  }
);
var cat1 = "lolo";
var cat2 = "katy";
document.querySelector('#cat1').innerText=cat1;
document.querySelector('#cat2').innerText=cat2;
