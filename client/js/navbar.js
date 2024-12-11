document.addEventListener('DOMContentLoaded', () => {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
        
            document.getElementById('navbar-container').innerHTML = data;

            // Define elements AFTER the navbar is injected
            const hamburger = document.getElementById('hamburger');
            const navbarMenu = document.getElementById('navbarMenu');
            const overlay = document.getElementById('overlay');
            const closeOverlay = document.getElementById('closeOverlay');
            const closeSidebar = document.getElementById('closeSidebar');

            const aboutLink = document.getElementById('aboutLink');
            const productsLink = document.getElementById('productsLink');
            const servicesLink = document.getElementById('servicesLink');
            const industriesLink = document.getElementById('industriesLink');

            const aboutDropdownContent = document.getElementById('aboutDropdownContent');
            const productsDropdownContent = document.getElementById('productsDropdownContent');
            const servicesDropdownContent = document.getElementById('servicesDropdownContent');
            const industriesDropdownContent = document.getElementById('industriesDropdownContent');

            // Add null checks
            if (hamburger && navbarMenu) {
                hamburger.addEventListener('click', () => {
                    navbarMenu.classList.toggle('open');
                });
            }

            if (closeOverlay) {
                closeOverlay.addEventListener('click', () => {
                    overlay.style.display = 'none';
                    if (aboutDropdownContent) aboutDropdownContent.style.display = 'none';
                    if (productsDropdownContent) productsDropdownContent.style.display = 'none';
                    if (servicesDropdownContent) servicesDropdownContent.style.display = 'none';
                    if (industriesDropdownContent) industriesDropdownContent.style.display = 'none';
                });
            }

            if (closeSidebar) {
                closeSidebar.addEventListener('click', () => {
                    overlay.style.display = 'none';
                    navbarMenu.classList.remove('open');
                });
            }

            if (aboutLink && aboutDropdownContent) {
                aboutLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    showOverlayContent(aboutDropdownContent);
                });
            }
            if (productsLink && productsDropdownContent) {
                productsLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    showOverlayContent(productsDropdownContent);
                });
            }
            
            if (servicesLink && servicesDropdownContent) {
                servicesLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    showOverlayContent(servicesDropdownContent);
                });
            }
            
            if (industriesLink && industriesDropdownContent) {
                industriesLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    showOverlayContent(industriesDropdownContent);
                });
            }

            function showOverlayContent(content) {
                overlay.style.display = 'flex';
                if (aboutDropdownContent) aboutDropdownContent.style.display = 'none';
                if (productsDropdownContent) productsDropdownContent.style.display = 'none';
                if (servicesDropdownContent) servicesDropdownContent.style.display = 'none';
                if (industriesDropdownContent) industriesDropdownContent.style.display = 'none';
                if (content) content.style.display = 'flex';
            }
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});
