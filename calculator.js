const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.calc-btn');

let currentInput = '';

// Add click events to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (value === 'AC') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }
        
        display.value = currentInput || '0';
    });
});
