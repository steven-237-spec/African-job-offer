function handleContact() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (!name || !email || !message) {
    alert('Please fill in all required fields');
    return;
  }
  // Simulate API call
  console.log('Sending contact message:', { name, email, message });
  alert('Message sent successfully');
}