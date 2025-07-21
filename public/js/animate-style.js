/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
*/

document.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.getElementById('animatedElement');
    const bounceBtn = document.getElementById('bounceBtn');
    const fadeInUpBtn = document.getElementById('fadeInUpBtn');
    const shakeXBtn = document.getElementById('shakeXBtn');
    const tadaBtn = document.getElementById('tadaBtn');

    const animateCSS = (element, animation, prefix = 'animate__') =>
        new Promise((resolve) => {
            const animationName = `${prefix}${animation}`;
            element.classList.add(`${prefix}animated`, animationName);

            function handleAnimationEnd(event) {
                event.stopPropagation();
                element.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            element.addEventListener('animationend', handleAnimationEnd, { once: true });
        });

    if (bounceBtn) {
        bounceBtn.addEventListener('click', () => {
            animateCSS(animatedElement, 'bounce');
        });
    }
    if (fadeInUpBtn) {
        fadeInUpBtn.addEventListener('click', () => {
            animateCSS(animatedElement, 'fadeInUp');
        });
    }
    if (shakeXBtn) {
        shakeXBtn.addEventListener('click', () => {
            animateCSS(animatedElement, 'shakeX');
        });
    }
    if (tadaBtn) {
        tadaBtn.addEventListener('click', () => {
            animateCSS(animatedElement, 'tada');
        });
    }
});
