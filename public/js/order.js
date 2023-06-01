const order = async (burgerId) => {
  const response = await fetch(`/api/orders/${burgerId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    console.log('Order placed');
  } else {
    console.log('Order failed');
  }
};

const orderBtns = document.querySelectorAll('.button');