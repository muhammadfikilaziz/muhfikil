document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item");
  const grid = document.querySelector(".gallery-grid");
  const gridWidth = grid.offsetWidth;
  const gridHeight = grid.offsetHeight;

  items.forEach(item => {
    // acak posisi (supaya gak keluar dari area)
    const top = Math.random() * (gridHeight - 220); // 220 kira2 tinggi kartu
    const left = Math.random() * (gridWidth - 220);

    // acak rotasi -15 sampai +15 derajat
    const rotate = (Math.random() * 30) - 15;

    item.style.top = `${top}px`;
    item.style.left = `${left}px`;
    item.style.transform = `rotate(${rotate}deg)`;
  });
});
