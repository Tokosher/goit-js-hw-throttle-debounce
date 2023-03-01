// console.log(_.add(2 ,3))

// Throttle resize

// let counter = 0;
//
// window.addEventListener('resize', _.throttle(resizeHandler, 300));
//
// function resizeHandler () {
//     console.log(++counter);
// }

// Throttle scroll

// let counter = 0;
//
// window.addEventListener('scroll', _.throttle(scrollHandler, 300));
//
// function scrollHandler () {
//     console.log(++counter);
// }

// Debounce with inputs
// const input = document.querySelector('input');
//
// input.addEventListener('input', _.debounce(inputHandler, 500));
//
// function inputHandler (e) {
//     console.log(e.target.value);
// }

// Form registration with 2 inputs
// const REQUIRED_SYMBOLS_AMOUNT = 8;
// const nickNameInput = document.querySelector('#user-nick');
// const passwordInput = document.querySelector('#user-pass');
//
// nickNameInput.addEventListener('input', _.debounce(inputHandler, 500));
// passwordInput.addEventListener('input', _.debounce(inputHandler, 500));
//
// function inputHandler (e) {
//     const currentInput = e.target;
//     const symbolAmount = currentInput.value.length;
//
//     currentInput.style.backgroundColor =
//         symbolAmount < REQUIRED_SYMBOLS_AMOUNT ? 'red' : 'lightgreen';
// }




// Intersection observer example 1

// const target = document.querySelector('.animated-text');
//
// const observer = new IntersectionObserver(handlerIntersection);
// observer.observe(target);
//
// function handlerIntersection (entries) {
//     console.log(entries);
//     entries.map(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         } else {
//             entry.target.classList.remove('visible');
//         }
//     })
// }


// Intersection observer example 2

const images = document.querySelectorAll('.lazyload');

const observer = new IntersectionObserver(handleIntersection);
images.forEach(image => observer.observe(image));

function handleIntersection (entries) {
    console.log('handleIntersection')
    entries.map(entry => {
        if (entry.isIntersecting) {
            // adding src from data
            entry.target.src =
                entry.target.dataset.src

            // add class loaded
            entry.target.classList.add('loaded')

            // unsubscribe entry
            observer.unobserve(entry.target);

        }
    })
}
