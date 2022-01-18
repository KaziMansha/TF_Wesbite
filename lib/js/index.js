var button = document.getElementById("button");

// If the user scrolls down 20 pixels the button will show
window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// If the user clicks the button it will scroll the user back to the top and stop displaying the button
function topf() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}