const img = document.getElementById("profileImage");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;

  img.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
});

document.addEventListener("mouseleave", () => {
  img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
});


// Smooth Scroll for arrows
document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});




