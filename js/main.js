const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.classList.add('ripples')
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';

        button.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});
