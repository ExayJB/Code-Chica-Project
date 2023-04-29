window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("ID").style.fontSize = "0.7em";
  } else {
    document.getElementById("ID").style.fontSize = "1em";
  }
}