const selectMonkeyBtns = document.querySelectorAll('.select-monkey-button');

selectMonkeyBtns.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    // Get the spacemonkeyId from the button's data-id attribute
    const spacemonkey_id = e.target.getAttribute('data-id');
    const burger_id = localStorage.getItem('burgerId');
    const response = await fetch('/api/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ burger_id, spacemonkey_id }),
    });

    if (response.ok) {
      const respData = await response.json();
      window.location.href = `/orders/confirmation/${respData.id}`;
    } else {
      console.log('Order creation failed');
    }
  });
});
