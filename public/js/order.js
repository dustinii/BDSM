// Universal function for all order buttons, uses the forEach method to populate each button with an ID unique to the data that is put into an individual order

document.querySelectorAll('.order-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const selectedBurgerid = e.target.getAttribute('data-id');
    window.location.href = `/chooseSpacemonkey?burger_id=${selectedBurgerid}`;
  });
});

const orderBtns = document.querySelectorAll('.button');

orderBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const burger_id = e.target.dataset.id;
    localStorage.setItem('burger_id', burger_id);
    window.location.href = '/selectMonkey';
  });
});
