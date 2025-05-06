const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
});

// Initial display
showCard(currentIndex);
