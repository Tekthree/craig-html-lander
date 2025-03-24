// Diagnostic script for accordion functionality
// Add this at the end of your HTML before the closing body tag for testing:
// <script src="accordion-debug.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    console.log('Accordion Debug Script loaded');
    
    // Check if accordion elements exist
    const accordionItems = document.querySelectorAll('.qa-item');
    console.log(`Found ${accordionItems.length} accordion items`);
    
    if (accordionItems.length > 0) {
        // Add a manual testing function
        window.testAccordions = function() {
            console.log('Testing accordions manually');
            
            // Log each accordion item's current state
            accordionItems.forEach((item, index) => {
                const isActive = item.classList.contains('active');
                const question = item.querySelector('.qa-question h4').textContent;
                const icon = item.querySelector('.accordion-icon i');
                const iconClass = icon ? icon.className : 'not found';
                
                console.log(`Accordion #${index + 1}: "${question}"`);
                console.log(`- Active: ${isActive}`);
                console.log(`- Icon class: ${iconClass}`);
                
                // Add a test click function
                item._testClick = function() {
                    console.log(`Clicking on accordion #${index + 1}`);
                    item.querySelector('.qa-question').click();
                    
                    // Log the new state after click
                    const newIsActive = item.classList.contains('active');
                    const newIconClass = item.querySelector('.accordion-icon i').className;
                    console.log(`- New active state: ${newIsActive}`);
                    console.log(`- New icon class: ${newIconClass}`);
                    
                    // Check if the answer is visible
                    const answer = item.querySelector('.qa-answer');
                    const style = window.getComputedStyle(answer);
                    console.log(`- Answer max-height: ${style.maxHeight}`);
                    console.log(`- Answer visibility: ${style.visibility}`);
                    console.log(`- Answer opacity: ${style.opacity}`);
                };
            });
            
            console.log('You can test any accordion by running:');
            console.log('document.querySelectorAll(".qa-item")[index]._testClick()');
            console.log('For example, to test the first accordion: document.querySelectorAll(".qa-item")[0]._testClick()');
        };
        
        // Add a visual indicator to show the script is running
        const debugIndicator = document.createElement('div');
        debugIndicator.style.position = 'fixed';
        debugIndicator.style.bottom = '10px';
        debugIndicator.style.right = '10px';
        debugIndicator.style.background = 'rgba(0,0,0,0.7)';
        debugIndicator.style.color = '#fff';
        debugIndicator.style.padding = '5px 10px';
        debugIndicator.style.borderRadius = '5px';
        debugIndicator.style.fontSize = '12px';
        debugIndicator.style.zIndex = '9999';
        debugIndicator.textContent = 'Accordion Debug Active';
        debugIndicator.style.cursor = 'pointer';
        debugIndicator.onclick = function() {
            window.testAccordions();
            alert('Check the console (F12) for accordion testing information');
        };
        
        document.body.appendChild(debugIndicator);
        
        console.log('Accordion debug is ready. Click the indicator in the bottom right corner or run window.testAccordions() in the console to test.');
    } else {
        console.error('No accordion items found with .qa-item class');
    }
});