const animatedElements = document.querySelectorAll('.scene1, .scene2-bg, .scene2-text, .text');
const CYCLE_MS = 19200;

function restartCycle() {
    animatedElements.forEach(el => {
        el.style.animation = 'none';
    });
    void document.body.offsetHeight;
    animatedElements.forEach(el => {
        el.style.animation = '';
    });
}

setInterval(restartCycle, CYCLE_MS);
