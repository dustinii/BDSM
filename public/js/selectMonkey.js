const selectMonkeyBtns = document.querySelectorAll('.select-monkey-button');

selectMonkeyBtns.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    // Get the spacemonkeyId from the button's data-id attribute
    const spacemonkeyId = e.target.getAttribute('data-id');
    const burgerId = localStorage.getItem('burgerId');
    const response = await fetch('/api/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ burgerId, spacemonkeyId }),
    });

    if (response.ok) {
      window.location.href = '/orders/confirmation';
    } else {
      console.log('Order creation failed');
    }
  });
});
