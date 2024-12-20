document.getElementById('userForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('https://secu-back.vercel.app/secufleet/auth/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      console.log(data);

      const token = data.token;

      localStorage.setItem('jwtToken', token);

      window.location.href = '/admin/adminPage.html';
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
