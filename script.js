// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all bean groups (labels)
    const beanGroups = document.querySelectorAll('.bean-group');
    
    // Get all description divs
    const descriptions = {
        liberica: document.getElementById('liberica-desc'),
        excelsa: document.getElementById('excelsa-desc'),
        robusta: document.getElementById('robusta-desc'),
        arabica: document.getElementById('arabica-desc')
    };
    
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    
    // Get all radio inputs
    const radios = {
        liberica: document.getElementById('liberica-toggle'),
        excelsa: document.getElementById('excelsa-toggle'),
        robusta: document.getElementById('robusta-toggle'),
        arabica: document.getElementById('arabica-toggle')
    };
    
    // Function to hide all descriptions
    function hideAllDescriptions() {
        Object.values(descriptions).forEach(desc => {
            desc.classList.remove('active');
        });
        
        // Uncheck all radios
        Object.values(radios).forEach(radio => {
            radio.checked = false;
        });
    }
    
    // Function to show specific description
    function showDescription(beanName) {
        hideAllDescriptions();
        if (descriptions[beanName]) {
            descriptions[beanName].classList.add('active');
            if (radios[beanName]) {
                radios[beanName].checked = true;
            }
        }
    }
    
    // Add click event to each bean group
    beanGroups.forEach(group => {
        group.addEventListener('click', function() {
            // Determine which bean was clicked based on class
            if (this.classList.contains('liberica-group')) {
                showDescription('liberica');
            } else if (this.classList.contains('excelsa-group')) {
                showDescription('excelsa');
            } else if (this.classList.contains('robusta-group')) {
                showDescription('robusta');
            } else if (this.classList.contains('arabica-group')) {
                showDescription('arabica');
            }
        });
    });
    
    // Add click event to close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const beanName = this.getAttribute('data-bean');
            hideAllDescriptions();
            
            // Uncheck the corresponding radio
            if (radios[beanName]) {
                radios[beanName].checked = false;
            }
        });
    });
    
    // Optional: Click outside to close? (but we have close buttons)
    // Click on page background doesn't close by design, only close button
    
    // For debugging: log that script is loaded
    console.log('Coffee shop page script loaded');
    
    // Initially hide all descriptions
    hideAllDescriptions();
});