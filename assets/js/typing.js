const phrases = ["Blogger", "Web Designer"];
const typingSpan = document.getElementById("typing");
let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  
  if (isDeleting) {
    typingSpan.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typingSpan.textContent = currentPhrase.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", type);
