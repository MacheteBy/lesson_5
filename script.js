const bths = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(bths[0].classList.add('red'));
// console.log(bths[0].classList.remove('blue'));
// console.log(bths[0].classList.toggle('blue'));


// bths[0].addEventListener('click', () => {
//     if (!bths[1].classList.contains('red')) {
//         bths[1].classList.add('red');
//     } else {
//         bths[1].classList.remove('red');
//     }
// });
// bths[0].addEventListener('click', () => {
//     bths[1].classList.toggle('red');
// });


// console.log(bths[0].className);


wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        bths[0].classList.toggle('silver');
    }
});


// bths.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.classList.toggle('silver');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);