/*
 * @author    [EazZy Project]
 * @copyright Copyright (c) [2025] [EazZy Project]
 * @license   https://opensource.org/licenses/MIT MIT License
 */

/**
 * Fungsi untuk menampilkan modal error.
 * @param {string} title - Judul modal.
 * @param {string} message - Pesan yang akan ditampilkan di dalam modal.
 */
export function showErrorModal(title, message) {
  const existingModal = document.getElementById("error-modal");
  if (existingModal) {
    existingModal.remove();
  }

  const modalOverlay = document.createElement("div");
  modalOverlay.id = "error-modal";
  modalOverlay.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

  const modalContent = document.createElement("div");
  modalContent.className = "bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md";

  const modalHeader = document.createElement("div");
  modalHeader.className = "flex items-center mb-4";

  const errorIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  errorIcon.setAttribute("class", "h-8 w-8 text-red-500 mr-3");
  errorIcon.setAttribute("fill", "none");
  errorIcon.setAttribute("viewBox", "0 0 24 24");
  errorIcon.setAttribute("stroke", "currentColor");
  errorIcon.innerHTML =
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />';

  const modalTitle = document.createElement("h3");
  modalTitle.className = "text-xl font-bold text-gray-800";
  modalTitle.textContent = title;

  modalHeader.appendChild(errorIcon);
  modalHeader.appendChild(modalTitle);

  const modalBody = document.createElement("p");
  modalBody.className = "text-gray-600 mb-6";
  modalBody.textContent = message;

  const closeButton = document.createElement("button");
  closeButton.className =
    "bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-red-700 transition-colors";
  closeButton.textContent = "Tutup";
  closeButton.onclick = () => modalOverlay.remove();

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(closeButton);
  modalOverlay.appendChild(modalContent);

  document.body.appendChild(modalOverlay);
}