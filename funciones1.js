addEventListener('load',inicializarFunciones,false);

function inicializarFunciones() {
  window.addEventListener('scroll',ver,false);
}
function ver() {
  // console.log(document.body.scrollTop);
  var pos = document.body.scrollTop;
  var menu = document.getElementById('menu_fixed');
  var main = document.getElementById('main');
  if (pos >= 90) {
    // menu.style.top = "0px";
    menu.style.visibility = "visible";
    // main.style.marginTop = "120px";
  }else{
    // menu.style.top = "90px";
    menu.style.visibility = "hidden";
    // main.style.marginTop = "0px";
  }
}
