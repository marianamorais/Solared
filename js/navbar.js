window.onscroll = function () {
 scrollFunction()
};

function scrollFunction() {
 if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   document.getElementById("navbar").style.padding = "1px 57px";
 } else {
   document.getElementById("navbar").style.padding = "8px 57px";
   document.getElementById("logo").style.fontSize = "35px";
 }
}