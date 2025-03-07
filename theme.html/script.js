document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
    // Lazy loading images
    const lazyImages = document.querySelectorAll(".lazy-load");
    const lazyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                lazyObserver.unobserve(entry.target);
            }
        });
    });
    lazyImages.forEach(img => lazyObserver.observe(img));
    
    // Collapsible sections
    document.querySelectorAll(".collapsible").forEach(section => {
        section.addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
    
    // Floating WhatsApp button
    const whatsappBtn = document.createElement("div");
    whatsappBtn.innerHTML = `<a href="https://wa.me/254700000000" target="_blank" class="whatsapp-float">📱 Chat with us</a>`;
    document.body.appendChild(whatsappBtn);
    
    // Search functionality
    const searchInput = document.getElementById("search-bar");
    searchInput?.addEventListener("keyup", function () {
        let filter = searchInput.value.toUpperCase();
        let items = document.querySelectorAll(".searchable");
        items.forEach(item => {
            let text = item.textContent || item.innerText;
            item.style.display = text.toUpperCase().includes(filter) ? "" : "none";
        });
    });
});
