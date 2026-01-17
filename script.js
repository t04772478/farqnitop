const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

let score = 0;

document.querySelectorAll('.img-wrap').forEach(box => {
  box.addEventListener('click', (e) => {
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mark = document.createElement('div');
    mark.className = 'mark';
    mark.style.left = (x - 15) + 'px';
    mark.style.top = (y - 15) + 'px';

    box.appendChild(mark);

    score++;
    document.getElementById('score').innerText = "Ball: " + score;
  });
});
