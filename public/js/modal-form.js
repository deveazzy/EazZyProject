/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

document.addEventListener('DOMContentLoaded', function() {
    const infoModal = document.getElementById('infoModal');
    const confirmModal = document.getElementById('confirmModal');
    const formModal = document.getElementById('formModal');

    const openInfoModalBtn = document.getElementById('openInfoModal');
    const openConfirmModalBtn = document.getElementById('openConfirmModal');
    const openFormModalBtn = document.getElementById('openFormModal');

    const closeButtons = document.querySelectorAll('.close-modal');

    function openModal(modalElement) {
        if (modalElement) {
            modalElement.classList.add('show');
            modalElement.addEventListener('click', closeModalOutside);
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.classList.remove('show');
            modalElement.removeEventListener('click', closeModalOutside);
            document.body.style.overflow = '';
        }
    }

    function closeModalOutside(event) {
        if (event.target.classList.contains('modal-container')) {
            closeModal(event.target);
        }
    }

    if (openInfoModalBtn) {
        openInfoModalBtn.addEventListener('click', function() {
            openModal(infoModal);
        });
    }

    if (openConfirmModalBtn) {
        openConfirmModalBtn.addEventListener('click', function() {
            openModal(confirmModal);
        });
    }

    if (openFormModalBtn) {
        openFormModalBtn.addEventListener('click', function() {
            openModal(formModal);
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalToClose = button.closest('.modal-container');
            closeModal(modalToClose);
        });
    });

    const confirmActionButton = document.getElementById('confirmActionButton');
    if (confirmActionButton) {
        confirmActionButton.addEventListener('click', function() {
            customAlert('Tindakan dikonfirmasi! (Ini hanya contoh)');
            closeModal(confirmModal);
        });
    }

    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;

            if (password !== confirmPassword) {
                customAlert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
                return;
            }
            if (!agreeTerms) {
                customAlert('Anda harus menyetujui Syarat & Ketentuan!');
                return;
            }

            customAlert('Formulir berhasil disubmit! (Cek console log)');
            closeModal(formModal);
            registrationForm.reset();
        });
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
});

function customAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-9999';
    alertBox.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <p class="text-lg font-semibold mb-4">${message}</p>
            <button id="alertCloseButton" class="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-200 ease-in-out">
                Oke
            </button>
        </div>
    `;
    document.body.appendChild(alertBox);

    document.getElementById('alertCloseButton').addEventListener('click', () => {
        document.body.removeChild(alertBox);
    });
}