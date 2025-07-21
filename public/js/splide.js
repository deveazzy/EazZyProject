/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

document.addEventListener('DOMContentLoaded', function () {
var splide = new Splide('#contoh-slider', {
type       : 'loop',
perPage    : 3,
perMove    : 1,
gap        : '1rem',
pagination : true,
arrows     : true,
breakpoints: {
    768: {
    perPage: 2,
    },
    640: {
    perPage: 1,
    },
},
});
splide.mount();
});