// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 1000 ||
//     document.documentElement.scrollTop > 1000
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
//   // behavior: "smooth";
// }
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
