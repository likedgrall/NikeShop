let hearts = document.querySelectorAll(".heart");

for (let i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function() {
        hearts[i].classList.toggle("heart_active");
    }
}