/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

document.addEventListener('DOMContentLoaded', () => {

    const initSlidingIndicator = (nav) => {
        const indicator = nav.querySelector('.sliding-indicator');
        const buttons = nav.querySelectorAll('.tab-button');
        const activeButton = nav.querySelector('.tab-button.active');
        if (!indicator || !activeButton) return;

        function moveIndicator(targetButton) {
            const targetRect = targetButton.getBoundingClientRect();
            indicator.style.width = `${targetRect.width}px`;
            indicator.style.left = `${targetButton.offsetLeft}px`;
        }

        setTimeout(() => moveIndicator(activeButton), 150);
        buttons.forEach(button => button.addEventListener('click', () => moveIndicator(button)));
        window.addEventListener('resize', () => {
            const currentActiveButton = nav.querySelector('.tab-button.active');
            if (currentActiveButton) moveIndicator(currentActiveButton);
        });
    };

    const allTabNavs = document.querySelectorAll('nav[data-tab-group]');

    allTabNavs.forEach(nav => {
        const buttons = nav.querySelectorAll('.tab-button');
        if (nav.classList.contains('pill-nav-container')) {
            initSlidingIndicator(nav);
        }

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                buttons.forEach(btn => {
                    const panel = document.querySelector(btn.dataset.tabTarget);
                    if (panel) panel.classList.remove('active');
                });

                button.classList.add('active');
                const targetPanel = document.querySelector(button.dataset.tabTarget);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }

                if (nav.classList.contains('pill-nav-container')) {
                    buttons.forEach(btn => {
                        btn.classList.remove('text-white', 'text-blue-700', 'text-green-800', 'text-gray-600');
                        if (nav.classList.contains('green')) {
                            btn.classList.add('text-green-800');
                        } else if (nav.classList.contains('dark')) {
                            btn.classList.add('text-gray-600');
                        } else {
                            btn.classList.add('text-blue-700');
                        }
                    });
                    if (nav.classList.contains('green') || nav.classList.contains('dark')) {
                        button.classList.add('text-white');
                    } else {
                        button.classList.add('text-blue-700');
                    }
                }
                
                if (nav.classList.contains('md:flex-col')) {
                     buttons.forEach(btn => {
                        btn.classList.remove('text-blue-700', 'bg-blue-50');
                        btn.classList.add('text-gray-600');
                        btn.querySelector('i')?.classList.remove('text-blue-700');
                        btn.querySelector('i')?.classList.add('text-gray-400');
                     });
                     button.classList.add('text-blue-700', 'bg-blue-50');
                     button.classList.remove('text-gray-600');
                     button.querySelector('i')?.classList.add('text-blue-700');
                     button.querySelector('i')?.classList.remove('text-gray-400');
                }

                if (nav.classList.contains('-mb-px')) {
                    buttons.forEach(btn => {
                        btn.classList.remove('text-blue-600', 'border-blue-500');
                        btn.classList.add('text-gray-500', 'border-transparent');
                    });
                    button.classList.add('text-blue-600', 'border-blue-500');
                    button.classList.remove('text-gray-500', 'border-transparent');
                }
            });
        });
    });
});