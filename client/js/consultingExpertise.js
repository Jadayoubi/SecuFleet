
document.addEventListener("DOMContentLoaded", function() {
    fetch('/consulting-section') // This path should point to the consulting-section.html file or endpoint.
        .then(response => response.text())
        .then(data => {
            document.getElementById('consulting-section-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the section:', error));
});

