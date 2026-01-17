const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

let score = 0;

// FARQLAR (px bo‘yicha)
const differences = [
  { name: "quloq", x: 60, y: 40, found: false },
  { name: "ko'z",  x: 95, y: 75, found: false },
  { name: "pishloq", x: 140, y: 120, found: false }
];

document.querySelectorAll(".img-wrap").forEach(box => {
  box.addEventListener("click", (e) => {

    const rect = box.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    differences.forEach(d => {
      if (!d.found &&
          Math.abs(d.x - clickX) < 15 &&
          Math.abs(d.y - clickY) < 15) {

        d.found = true;
        score++;

        const mark = document.createElement("div");
        mark.className = "mark";
        mark.style.left = (d.x - 15) + "px";
        mark.style.top  = (d.y - 15) + "px";

        box.appendChild(mark);
        document.getElementById("score").innerText = "Ball: " + score;
      }
    });

  });
});
