
document.querySelector('.control button').addEventListener('click', async (event) => {
  event.preventDefault();

  const burger_id = document.querySelector('#burger_id').value;
  const reviewDetails = document.querySelector('#reviewDetails').value;

  const response = await fetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify({ burger_id, reviewDetails }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add review');
  }
});
