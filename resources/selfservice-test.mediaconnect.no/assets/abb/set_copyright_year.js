console.log("copyright year - adding function");
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("copyright year - updating span");
  var element = document.getElementById("copyright_year");
  if (element) {
    element.innerHTML = new Date().getFullYear();;
  }
});
