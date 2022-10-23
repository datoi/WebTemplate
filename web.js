var drop=document.getElementById("more");
drop.addEventListener("mouseover" ,function(){
  var x = document.getElementById("toggled");
  if (x.style.display !== 'block') {
    document.getElementById('dropdown-link').classList.add('active');
    x.style.display = "block"
  }
})

drop.addEventListener("mouseout" ,function(){
  var x = document.getElementById("toggled");
  document.getElementById('dropdown-link').classList.remove('active');
  x.style.display = "none"
})

var button=document.getElementById("york-btn")
var button2=document.getElementById("paris-btn")
var button3=document.getElementById("sanfran-btn")
var pophead=document.getElementById("pop-head");

var buttons = document.getElementsByClassName('buy-button');
for(var btn of buttons) {
  btn.addEventListener('click', function() {
    if(pophead.style.display !== "flex"){
      pophead.style.display = "flex"
    }
  })
}

var cls=document.getElementById("close");
cls.addEventListener("click", function(){
  if(pophead.style.display !== "none"){
    pophead.style.display = "none"
  }
})
