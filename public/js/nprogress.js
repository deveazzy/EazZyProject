/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

if (typeof NProgress !== 'undefined') {

    const startButton = document.getElementById('startButton');
    const doneButton = document.getElementById('doneButton');

    if (startButton && doneButton) {
        startButton.addEventListener('click', () => {
            NProgress.start();
        });

        doneButton.addEventListener('click', () => {
            NProgress.done();
        });
    }

} else {
    console.error('NProgress library not found. Make sure it is loaded correctly.');
}