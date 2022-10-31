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
