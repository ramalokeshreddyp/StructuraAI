const buttons = Array.from(document.querySelectorAll('.filter-btn'));
const cards = Array.from(document.querySelectorAll('.artifact-card'));

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    buttons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    cards.forEach((card) => {
      const group = card.dataset.group;
      const visible = filter === 'all' || group === filter;
      card.classList.toggle('hidden', !visible);
    });
  });
});

const counterItems = Array.from(document.querySelectorAll('[data-count]'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    const el = entry.target;
    const end = Number(el.dataset.count);
    const startsWithPlus = el.textContent.trim().startsWith('+');
    let current = 0;
    const step = Math.max(1, Math.ceil(end / 45));

    const tick = () => {
      current += step;
      if (current >= end) {
        current = end;
      }

      if (startsWithPlus) {
        el.textContent = `+${current} pts`;
      } else {
        el.textContent = `${current}%`;
      }

      if (current < end) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
    observer.unobserve(el);
  });
}, { threshold: 0.4 });

counterItems.forEach((item) => observer.observe(item));

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const shots = Array.from(document.querySelectorAll('.shot-btn'));

shots.forEach((shot) => {
  shot.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxTitle) {
      return;
    }

    lightboxImage.src = shot.dataset.image || '';
    lightboxImage.alt = shot.dataset.title || 'Screenshot preview';
    lightboxTitle.textContent = shot.dataset.title || 'Preview';

    if (typeof lightbox.showModal === 'function') {
      lightbox.showModal();
    }
  });
});
