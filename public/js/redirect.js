// Simple timeout method to redirect to the order complete page, with a 5-second timer

setTimeout(() => {
  window.location.href = '/orderComplete';
}, 5000);