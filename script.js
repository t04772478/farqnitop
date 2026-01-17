const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

let score = 0;

// FARQLAR RO‘YXATI (foizda)
const differences = [
  { x: 50, y: 40, found: false }
];

document.querySelectorAll('.img-wrap').forEach(box => {
  box.addEventListener('click', (e) => {
    const rect = box.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    differences.forEach(d => {
      if (!d.found &&
          Math.abs(d.x - x) < 5 &&
          Math.abs(d.y - y) < 5) {

        d.found = true;
        score++;
        document.getElementById('score').innerText = "Ball: " + score;

        const mark = document.createElement('div');
        mark.className = 'mark';
        mark.style.left = (d.x - 2) + '%';
        mark.style.top = (d.y - 2) + '%';
        box.appendChild(mark);
      }
    });
  });
});
