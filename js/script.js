const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const card = document.querySelector(".card");
const letterContainer = document.getElementById("letterContainer");
const letterDiv = document.getElementById("letter");
const heartsContainer = document.getElementById("hearts");

let scale = 1;
let noCount = 0;

const messagesArr = [
    "Are you sure? 🥺",
    "Really really sure? 😢",
    "But… I asked nicely 🥹",
    "You're breaking my heart 💔",
    "What if I ask again? 😭",
    "Please reconsider 🥲",
    "Look at the YES button… it’s huge now 😳",
    "At this point, it's destiny 💘",
    "The universe wants you to click YES 🌌",
    "I won't stop growing 😈",
    "Resistance is futile 😏",
    "Okay, now you're just teasing me 😤",
    "Just click yes already 😭",
    "YES is the only option now 😈",
    "You know you want to ❤️"
];

noBtn.addEventListener("click", () => {
    noCount++;
    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;
    message.textContent = messagesArr[Math.min(noCount - 1, messagesArr.length - 1)];
    if (noCount > 5) message.style.color = "#ff4d6d";
    if (noCount > 8) message.style.fontSize = "22px";
});

function createHearts(num) {
    for (let i = 0; i < num; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = 16 + Math.random() * 24 + "px";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

const loveLetterParagraphs = [
    "💖 My Love 💖<br><br>Loving you is the easiest and most beautiful thing I’ve ever done. Every smile, every laugh, every moment with you makes my world brighter. You are my comfort, my happiness, and my safe place. No matter what happens, my heart chooses you — always. Your presence fills my days with warmth, and your voice is my favorite melody.",
    
    "🤞 My Promise 🤞<br><br>I promise to stay loyal, honest, and faithful to you. To choose you every day, even on the hard days. To respect your heart, your dreams, and your feelings. You will never have to doubt where I stand — I stand with you. I promise to celebrate your victories, hold your hand through challenges, and always be your biggest cheerleader.",
    
    "🌸 Our Future 🌸<br><br>I see a future filled with laughter, growth, and love with you. Through ups and downs, I want to build a life together. Hand in hand, heart to heart. As long as you’re with me, the future feels right. I imagine cozy mornings, adventures we’ll share, quiet nights talking under the stars, and a life where every day, we make each other feel special. With you, even the smallest moments are extraordinary.",
    
    "✨ Our Little Joys ✨<br><br>Every silly joke we share, every warm hug, and every tiny moment makes my love for you grow. You make ordinary days magical, and even the hardest times seem easier because we face them together. My heart feels lighter and happier just knowing you’re mine.",
    
    "💌 Endless Love 💌<br><br>No words can ever truly capture how much you mean to me. My love for you is endless, patient, and true. I hope to be your safe haven, your smile on a cloudy day, and the person you can always count on. Together, we are unstoppable, and I look forward to every chapter we’ll write in this beautiful story of ours.",
    
    "❤️ I love you mahal ko ❤️"
];


yesBtn.addEventListener("click", () => {
    // Change the main title
    const mainTitle = card.querySelector("h1");
    mainTitle.textContent = "My Love Letter for You 💌";

    // Hide YES/NO buttons and message
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    message.style.display = "none";

    // Hearts animation
    createHearts(5);

    // Show the letter container
    letterContainer.style.display = "block";
    letterDiv.innerHTML = "";

    let index = 0;

    function showNextParagraph() {
        if (index >= loveLetterParagraphs.length) {
            // Enable scrolling after full letter
            letterContainer.classList.add("show-scroll");
            return;
        }

        const p = document.createElement("p");
        p.innerHTML = loveLetterParagraphs[index];
        letterDiv.appendChild(p);

        // Small delay to trigger fade-in
        setTimeout(() => p.classList.add("show"), 50);

        // Scroll to bottom smoothly
        letterContainer.scrollTo({
            top: letterDiv.scrollHeight,
            behavior: 'smooth'
        });

        index++;
        setTimeout(showNextParagraph, 2500);
    }

    showNextParagraph();
});

