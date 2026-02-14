const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let scale = 1;
let noCount = 0;

const messages = [
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
    message.textContent = messages[Math.min(noCount - 1, messages.length - 1)];

    if (noCount > 5) {
        message.style.color = "#ff4d6d";
    }

    if (noCount > 8) {
        message.style.fontSize = "22px";
    }

});

yesBtn.addEventListener("click", () => {
    document.querySelector(".card").innerHTML = `
        <h1>YAY!! 💕</h1>
        <p>I love you my baby ❤️</p>
        <p>Best decision ever 😘</p>
    `;
});
