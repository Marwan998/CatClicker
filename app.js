var elm = document.querySelector('img');
var inc = document.querySelector('p');
elm.addEventListener('click',function () {
  inc.innerHTML = parseInt(inc.innerText)+1;
});
