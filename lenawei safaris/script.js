function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

function toggleSubMenu() {
    let submenu = document.getElementById('submenu');
    submenu.classList.toggle('hidden');
}

function showSection(sectionId) {
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
