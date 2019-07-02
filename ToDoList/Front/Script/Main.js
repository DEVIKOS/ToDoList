var List = document.getElementsByTagName("LI");
var i;
for (i = 0; i < List.length; i++) {
  var span = document.createElement("Span");
  var BtnX = document.createTextNode("\u00D7");
  span.className = "Gatishva";
  span.appendChild(BtnX);
  List[i].appendChild(span);
}

var Gatishva = document.getElementsByClassName("Gatishva");
var i;

// -------------------ElementisDamalvaListidan-----------------------

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// -------------------ElementisMonishvnaListshi-----------------------

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("ვერ დაემატება რადგან ტექსტის ბარი ცარიელია!!!");
  } else {
    document.getElementById("Ul").appendChild(li);
  }
  document.getElementById("Input").value = "";

  var span = document.createElement("Span");
  var BtnX = document.createTextNode("\u00D7");
  span.className = "Gatishva";
  span.appendChild(BtnX);
  li.appendChild(span);

  for (i = 0; i < Gatishva.length; i++) {
    Gatishva[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// -------------------ElementisamatebaListshi-----------------------