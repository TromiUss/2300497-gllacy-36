var _ = document.querySelectorAll('input.input-back');
for(var i = 0; i < _.length; i++){
  _[i].onchange = function(e){
    var elem = e ? e.target : window.event.srcElement;
    document.body.style.backgroundColor = elem.value;
  }
};
