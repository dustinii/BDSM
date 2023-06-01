window.onload = async () => {
  const res = await fetch(`/api/orders/${orderId}`);
  const data = await res.json();
  
  // display data on the page
  document.querySelector('#burger-name').textContent = data.burger.name;
  document.querySelector('#restaurant-name').textContent = data.restaurant.name;
  
  // automatically redirect to order completed page after 5 seconds
  setTimeout(() => {
    document.location.replace('/order-completed');
  }, 5000);
};
  