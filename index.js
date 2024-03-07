const zeroText = document.getElementById('_zero');
let shadowX = 0;
let shadowY = 0;
let driftX = 0;
let driftY = 0;

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / 40; // Increase the divisor to reduce sensitivity
    const moveY = (clientY - centerY) / 40;

    shadowX = moveX * 1.5; // Reduce the movement multiplier
    shadowY = moveY * 1.5;

    driftX += (Math.random() - 0.5) * 1; // Reduce the drift amount
    driftY += (Math.random() - 0.5) * 1;

    zeroText.style.textShadow = `${shadowX + driftX}px ${shadowY + driftY}px 20px rgb(255 63 63 / 80%)`;
});