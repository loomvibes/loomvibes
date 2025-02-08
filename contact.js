document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });

    // Define your Google Apps Script URL (replace this with your web app URL)
    var googleScriptURL = 'https://script.google.com/a/macros/paytmmoney.com/s/AKfycbzKdOwMgFlzzp1gdrzfV9NFE-YKkTNfKuTDLwFDRuiGSkRlSBy4UYQRY3I3czQ2aSbi/exec';

    // Send form data to Google Apps Script using Fetch API
    fetch(googleScriptURL, {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())  // We are expecting plain text
    .then(result => {
        if (result === 'Success') {
            alert('Your message has been sent successfully!');
            document.getElementById("contactForm").reset(); // Reset the form
        } else {
            alert('Error: ' + result);  // Handle errors from Apps Script
        }
    })
    .catch(error => {
        console.error('Error:', error);  // Log any errors for debugging
        alert('There was an error submitting the form. Please try again.');
    });
});
