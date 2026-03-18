const yearNode = document.querySelector('#year');
if (yearNode) yearNode.textContent = String(new Date().getFullYear());

const kpiCards = document.querySelectorAll('.kpi-grid article');
kpiCards.forEach((card, idx) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(18px)';
  setTimeout(() => {
    card.style.transition = '450ms ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 160 * idx);
});
