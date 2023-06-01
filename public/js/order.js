document.querySelectorAll('.order-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const selectedBurgerid = e.target.getAttribute('data-id');
    window.location.href = `/chooseSpacemonkey?burger_id=${selectedBurgerid}`;
  });
});

const orderBtns = document.querySelectorAll('.button');

orderBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const burgerId = e.target.dataset.id;
    localStorage.setItem('burgerId', burgerId);
    window.location.href = '/selectMonkey';
  });
});
