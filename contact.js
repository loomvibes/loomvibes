// contact.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    // Construct the data object
    const formData = {
        name: name,
        email: email,
        mobile: mobile,
        message: message
    };
    console.log(formData);

    // Send data to Apps Script
    fetch('https://script.google.com/macros/s/AKfycbw_YK5q14Ba5tngMaMHnBlIpmhFVuhf4OjAKPYwpnkvAlE9a7vqkKEXpqLi7mVC2u1_/exec', { // Replace with your Apps Script URL
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        // You won't get a response here, so just handle success
        if(response.ok) {
            alert("Data submitted successfully!");
            document.getElementById("contactForm").reset();
        } else {
            alert("Error in submitting data!");
        }
    })
    .catch(error => {
        // You might get a network error here if the request fails completely
        alert("An error occurred: " + error.message);
        console.error('Fetch Error:', error);
    });
});