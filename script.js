
document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["Designing the Future of Intelligence..."];
    let current = 0;
    let charIndex = 0;
    const typingText = document.getElementById("typing-text");

    function type() {
        if (charIndex < phrases[current].length) {
            typingText.textContent += phrases[current].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }
    type();

    // Lottie animation
    const lottieContainer = document.getElementById("lottie");
    const player = document.createElement("lottie-player");
    player.setAttribute("src", "https://assets2.lottiefiles.com/packages/lf20_tll0j4bb.json");
    player.setAttribute("background", "transparent");
    player.setAttribute("speed", "1");
    player.setAttribute("loop", "");
    player.setAttribute("autoplay", "");
    player.style.width = "100%";
    player.style.height = "100%";
    lottieContainer.appendChild(player);
});
