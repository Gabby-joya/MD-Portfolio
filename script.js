// Teaching Philosophy Text Split into Two Paragraphs
const philosophyText1 = `Starting my first year of coding as a freshman feels like stepping into a completely new way of thinking. At first, everything seems overwhelming—strange syntax, confusing errors, and the constant feeling that everyone else understands more than I do. But I’ve started to realize that coding isn’t about knowing all the answers right away; it’s about learning how to approach problems, break them down, and stay patient when things don’t work. Every bug I fix and every small program I complete feels like a quiet victory, proof that persistence matters more than perfection. `;

const philosophyText2 = `As I continue learning, I’m beginning to see coding as more than just a technical skill—it’s a mindset. It teaches me to be curious, to experiment, and to accept failure as part of growth rather than something to avoid. I may not be an expert yet, but that’s not the goal right now. My philosophy is to keep showing up, keep practicing, and trust that understanding will come with time. Coding is less about getting it right the first time and more about learning how to keep going until I do.`;

const para1 = document.getElementById("philosophy-text-1");
const para2 = document.getElementById("philosophy-text-2");

let index1 = 0;
let index2 = 0;

// Type first paragraph
function typePhilosophy1() {
  if (index1 < philosophyText1.length) {
    para1.textContent += philosophyText1.charAt(index1);
    index1++;
    setTimeout(typePhilosophy1, 50);
  } else {
    // Start second paragraph after a short delay
    setTimeout(typePhilosophy2, 500);
  }
}

// Type second paragraph
function typePhilosophy2() {
  if (index2 < philosophyText2.length) {
    para2.textContent += philosophyText2.charAt(index2);
    index2++;
    setTimeout(typePhilosophy2, 50);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typePhilosophy1();
});