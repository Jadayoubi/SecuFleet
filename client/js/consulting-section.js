
document.addEventListener("DOMContentLoaded", function() {
    fetch('/consulting-section')
        .then(response => response.text())
        .then(data => {
            document.getElementById('consulting-section-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the section:', error));
});

