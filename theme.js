const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light-mode') {
    body.classList.add(savedTheme);
    updateButton(savedTheme);
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        localStorage.removeItem('theme');
        updateButton('');
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateButton('light-mode');
    }
});

function updateButton(theme) {
    themeToggle.textContent = theme === 'light-mode' ? '☀️' : '🌙';
}