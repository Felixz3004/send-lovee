const lines = [
  "เราอาจยังไม่รู้จักกันดี...",
  "แต่เราอยากรู้จักเธอมากกว่านี้",
  'เราว่าเธอน่ารักดีนะ <img src="smile.png" class="icon" />',
  "ขอบคุณที่ให้โอกาสเราได้คุยนะ ❤️"
];

let currentLine = 0;

function nextLine() {
  const p = document.getElementById("message");
  if (currentLine < lines.length) {
    p.innerHTML = lines[currentLine];
    currentLine++;
  } else {
    p.innerHTML = "แล้วเจอกันใหม่นะ 😘";
  }
  createHeart();
}
