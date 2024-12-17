
document.addEventListener("DOMContentLoaded", function() {
    fetch('/consulting-section.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('consulting-section-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the section:', error));
});

