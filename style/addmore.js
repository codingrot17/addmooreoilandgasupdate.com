document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Here, you can add code to handle form submission, such as sending data to a server.
  // For simplicity, we'll just log the form data in the console for now.
  const formData = new FormData(event.target);
  const formDataObject = Object.fromEntries(formData);
  console.log('Form data:', formDataObject);
});
