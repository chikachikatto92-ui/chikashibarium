const images = document.querySelectorAll('.funny-img');
const button = document.getElementById('magicBtn');
const body = document.body;

const chikaQuotes = [
  "Nyaa~! It's Chika Time!",
  "Shibarium just got 10x cuter 😻",
  "Wen Moon? Chika says now! 🚀",
  "CHIKA = Meme Power + Waifu Magic ✨",
  "Vibes only. Hold tight!"
];

if (button) {
  button.addEventListener('click', () => {
    const quote = chikaQuotes[Math.floor(Math.random() * chikaQuotes.length)];
    alert(quote);

    // Confetti simulation
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.textContent = '✨';
      sparkle.style.position = 'fixed';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.fontSize = `${Math.random() * 24 + 10}px`;
      sparkle.style.opacity = 1;
      sparkle.style.transition = 'all 1s ease';
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.style.top = `${parseInt(sparkle.style.top) + 100}px`;
        sparkle.style.opacity = 0;
      }, 10);

      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    }

    body.style.background = `hsl(${Math.random() * 360}, 80%, 85%)`;
  });
}

// Hover emoji trail for images
images.forEach(img => {
  img.addEventListener('mouseover', () => {
    const emojis = ["💖", "✨", "🌸", "🐶", "😻"];
    const sparkle = document.createElement('span');
    sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '2rem';
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  });
});

// Clipboard copy with fallback
const copyBtn = document.getElementById('copyBtn');
const contract = document.getElementById('contract');
const copyMsg = document.getElementById('copyMsg');

function fallbackCopyText(text) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

if (copyBtn && contract && copyMsg) {
  copyBtn.addEventListener('click', () => {
    const textToCopy = contract.textContent.trim();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyMsg.classList.add('visible');
        setTimeout(() => {
          copyMsg.classList.remove('visible');
        }, 1500);
      }).catch(err => {
        console.error('Clipboard copy failed. Falling back:', err);
        fallbackCopyText(textToCopy);
        copyMsg.classList.add('visible');
        setTimeout(() => {
          copyMsg.classList.remove('visible');
        }, 1500);
      });
    } else {
      fallbackCopyText(textToCopy);
      copyMsg.classList.add('visible');
      setTimeout(() => {
        copyMsg.classList.remove('visible');
      }, 1500);
    }
  });
}
