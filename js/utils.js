// Małe funkcje pomocnicze

// Losowy element z tablicy
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Zamiana znaków specjalnych na encje HTML (bezpieczne wstawianie tekstu z js/data.js)
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
