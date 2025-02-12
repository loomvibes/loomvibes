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
    fetch('https://script.google.com/macros/s/AKfycbzULtwVXOAUqnk1iiFLXIJtlJj2Giw1tKA0G43pOzGDHDsS1MUTVaIB6k5kh89gmtUS2A/exec', { // Replace with your Apps Script URL
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        // You won't get a response here, so just handle success
        alert('Message sent successfully!'); 
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        // You might get a network error here if the request fails completely
        alert('An error occurred. Please try again later.');
        console.error('Fetch Error:', error);
    });
});