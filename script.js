
const menuBtn = document.querySelector(".menu-btn");
const nav =document.querySelector(".nav");

menuBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    nav.classList.toggle('active');
})


// MENU ADD TO CART ANIMATION
const buttons = document.querySelectorAll(".menu-card button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Added!";
    btn.style.background = "green";

    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.background = "#ffc851";
    }, 1000);
  });
});


// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// INITIAL STATE
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "0.6s ease";
});