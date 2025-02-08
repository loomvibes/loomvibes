const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);

    const googleScriptURL = 'https://script.google.com/macros/s/AKfycbwVic4n1ERJ4_WAQ3r9-bl4iPGpeYVE691XYzNtSBkgs5oe93z9Adh8HsTWT8L8EpAa/exec';

    // Send form data to Google Apps Script using Fetch API
    fetch(googleScriptURL, {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())
    .then(result => {
        alert('Your message has been sent successfully!');
        form.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);  // Log error for debugging
        alert('There was an error submitting the form. Please try again.');
    });
});
