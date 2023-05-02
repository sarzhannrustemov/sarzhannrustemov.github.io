const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  form.reset();
});

