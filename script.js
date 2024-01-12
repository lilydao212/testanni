const wrapper = document.querySelector('.jumbotron');
const question = document.querySelector('.question');
const gif = document.querySelector('.img-fluid');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
    question.innerHTML = "I love you too! Happy 2 thang nhaaaa <3";
    gif.src = "https://i.pinimg.com/originals/39/21/17/3921175c0f460ed12e09b41bc54a18b5.gif";
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRec = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRec.width;
    const maxY = window.innerHeight - noBtnRec.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
