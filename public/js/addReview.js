// This script is used for adding an individual review, with logic to deal with a review that wasn't able to be added

document.querySelector('.control button').addEventListener('click', async (event) => {
  event.preventDefault();

  const burger_id = document.querySelector('#burger_id').value;
  const reviewDetails = document.querySelector('#reviewDetails').value;

  // POST to add the review with the burger_id and reviewDetails items to be stringified
  const response = await fetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify({ burger_id, reviewDetails }),
    headers: { 'Content-Type': 'application/json' },
  });

  // Logic to either add the review or give a failure alert
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add review');
  }
});
