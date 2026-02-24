const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const backBox = document.getElementById('backBox');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  backBox.classList.toggle('hidden');
});

backBox.addEventListener('click', () => {
  menu.classList.remove('open');
  backBox.classList.add('hidden');
})