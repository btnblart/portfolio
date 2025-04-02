const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const timeImage = document.getElementById('time-image');
const now = new Date();
const hour = now.getHours();

const body = document.body;

if (hour >= 6 && hour < 9) {
  body.setAttribute('data-theme', 'morning');
  body.style.setProperty('--bg-gradient', 'linear-gradient(to bottom, #f8cdda, #e0c3fc)');
  timeImage.src = '/images/g001.png';
} else if (hour >= 9 && hour < 17) {
  body.setAttribute('data-theme', 'day');
  body.style.setProperty('--bg-gradient', '#fff8e1');
  timeImage.src = '/images/g001.png';
} else if (hour >= 17 && hour < 19) {
  body.setAttribute('data-theme', 'evening');
  body.style.setProperty('--bg-gradient', 'linear-gradient(to bottom, #ff9966, #003366)');
  timeImage.src = '/images/g001.png';
} else {
  body.setAttribute('data-theme', 'night');
  body.style.setProperty('--bg-gradient', 'linear-gradient(to bottom, #001f3f, #000000)');
  timeImage.src = '/images/g002.png';
}


document.querySelectorAll('.thumbnail').forEach(img => {
  img.addEventListener('click', () => {
    lightboxContent.innerText = img.dataset.content;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
