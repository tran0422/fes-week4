let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove('modal__visible'); // Close the modal
    } else {
        isModalOpen = true;
        document.body.classList.add('modal__visible'); // Open the modal
    }
}