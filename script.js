function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var topNav = document.querySelector('.top-left');
    topNav.classList.toggle('active');
    menuIcon.classList.toggle('active');
}
// Get the form element
var form = document.getElementById('inputForm');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    // Get values for the rest of the inputs in a similar manner
    
    // Now you can do whatever you need with the input values
    // For example, you can pass them to a function for processing
    processInputs(input1, input2); // Call a function named processInputs with the input values as arguments
});

// Function to process the input values
function processInputs(input1, input2) {
    // Here you can perform any processing or validation you need with the input values
    // For demonstration, let's just log the input values to the console
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    // Log values for the rest of the inputs in a similar manner
}
