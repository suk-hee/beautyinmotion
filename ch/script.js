const animatedElements = document.querySelectorAll('.scene1, .scene2-bg, .scene2-text, .text');
const CYCLE_MS = 27700;
let cycleTimer = null;

function restartCycle() {
    animatedElements.forEach(el => {
        el.style.animation = 'none';
    });
    void document.body.offsetHeight;
    animatedElements.forEach(el => {
        el.style.animation = '';
    });
}

function startCycle() {
    stopCycle();
    cycleTimer = setInterval(restartCycle, CYCLE_MS);
}

function stopCycle() {
    if (cycleTimer !== null) {
        clearInterval(cycleTimer);
        cycleTimer = null;
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopCycle();
    } else {
        restartCycle();
        startCycle();
    }
});

startCycle();
