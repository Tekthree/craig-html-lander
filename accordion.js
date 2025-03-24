// Standalone Accordion Implementation
// This script focuses solely on making the accordions work correctly

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dedicated Accordion Script loaded');
    
    // Accordion for Q&A section
    const accordionItems = document.querySelectorAll('.qa-item');
    
    if (accordionItems.length > 0) {
        console.log(`Found ${accordionItems.length} accordion items`);
        
        // First, ensure all accordions start in the closed state
        accordionItems.forEach(item => {
            item.classList.remove('active');
            const icon = item.querySelector('.accordion-icon i');
            if (icon) {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
        
        // Add click event listeners
        accordionItems.forEach(item => {
            const question = item.querySelector('.qa-question');
            
            if (question) {
                question.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Accordion question clicked');
                    
                    // Close all other items
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            console.log('Closing another active accordion');
                            otherItem.classList.remove('active');
                            
                            // Reset icon for the other items
                            const otherIcon = otherItem.querySelector('.accordion-icon i');
                            if (otherIcon) {
                                otherIcon.classList.remove('fa-minus');
                                otherIcon.classList.add('fa-plus');
                            }
                        }
                    });
                    
                    // Toggle current item
                    const isActive = item.classList.contains('active');
                    console.log(`Current accordion active state: ${isActive}, toggling to: ${!isActive}`);
                    
                    if (isActive) {
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                    }
                    
                    // Toggle the icon
                    const icon = item.querySelector('.accordion-icon i');
                    if (icon) {
                        if (item.classList.contains('active')) {
                            console.log('Changing icon to minus');
                            icon.classList.remove('fa-plus');
                            icon.classList.add('fa-minus');
                        } else {
                            console.log('Changing icon to plus');
                            icon.classList.remove('fa-minus');
                            icon.classList.add('fa-plus');
                        }
                    }
                });
            } else {
                console.error('No .qa-question element found in accordion item');
            }
        });
        
        console.log('Accordion setup complete');
    } else {
        console.error('No accordion items found with .qa-item class');
    }
});