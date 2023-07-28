console.log('Funguju!');

const karticky = document.querySelectorAll('.karticka');

const otoceniKarty = (e) => {
  e.target.classList.toggle('otocena');
};

karticky.forEach((karticka) => {
  karticka.addEventListener('click', otoceniKarty);
});
