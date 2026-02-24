document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const content = dropdown.querySelector(".dropdown-content");

    // клик по кнопке Teorija
    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        dropdown.classList.add("active");
    });

    // закрытие при клике вне блока
    document.addEventListener("click", function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
});

