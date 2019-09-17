var cats_arr = [["lolo","https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",0],["kati","https://placekitten.com/640/426",0],["cat3","https://placekitten.com/640/425",0],["cat4","https://placekitten.com/640/427",0],["cat5","https://placekitten.com/640/420",0]];
var cats = document.querySelector('#cats');
var inc = document.createElement('p');
var img = document.createElement("img");
var n = document.createElement('p');
var counters = [0,0,0,0,0];

var handle = function(evt) {
  for (var l = 0; l < cats_arr.length; l++) {
    if(evt.target.src===cats_arr[l][1]){
      var count = counters[l] + 1;
      counters[l]= count;
      inc.innerText=counters[l];
      document.querySelector('body').appendChild(inc);
      console.log(counters);
      break;
    }
  }
};

for (var i = 0; i < cats_arr.length; i++) {
    var item = document.createElement("li");
    item.innerText = cats_arr[i][0];
    item.addEventListener('click',function(li) {
      for (var j = 0; j < cats_arr.length; j++) {
        if(cats_arr[j][0]===li.target.innerText){
          img.src = cats_arr[j][1];
          inc.innerHTML=counters[j];
          n.innerText=cats_arr[j][0];
          img.addEventListener('click',handle);
          break;
        }
      }
      document.querySelector('body').appendChild(n);
      document.querySelector('body').appendChild(img);
      document.querySelector('body').appendChild(inc);
    });
    cats.appendChild(item);
}
