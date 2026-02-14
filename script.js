let currentStep = 0;

function handleStep() {
    const topFlap = document.getElementById('topFlap');
    const paper = document.getElementById('paper');
    const seal = document.getElementById('heartSeal');
    const mainBtn = document.getElementById('mainBtn');

    if (currentStep === 0) {
        // Step 1: Just open the flap and pop letter
        seal.style.opacity = '0';
        topFlap.classList.add('open');
        setTimeout(() => {
            paper.classList.add('half-out');
            mainBtn.innerText = 'VIEW MESSAGE';
        }, 300);
        currentStep = 1;
    } else {
        // Step 2: Transition to the card page
        goNext(2);
    }
}

function goNext(pageNumber) {
    document.querySelectorAll('.page-container').forEach(p => p.classList.add('hidden'));
    const next = document.getElementById('page' + pageNumber);
    next.classList.remove('hidden');
    next.style.animation = "fadeIn 0.5s";
}

function goBack(pageNumber) {
    document.querySelectorAll('.page-container').forEach(p => p.classList.add('hidden'));
    document.getElementById('page' + pageNumber).classList.remove('hidden');
}

// Background Decoration
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('heart-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 500);